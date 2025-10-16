import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), '_posts')

export interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
  content: string
  excerpt: string
}

// 生成摘要：清理 Markdown 语法并截断到指定长度（按词边界）
function makeExcerpt(raw: string, maxLength = 150): string {
  const cleanContent = raw
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (cleanContent.length <= maxLength) return cleanContent
  const truncated = cleanContent.substring(0, maxLength)
  const safe = truncated.replace(/\s+\S*$/, '')
  return safe.trim() + '...'
}

export async function getPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const items = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const excerpt = makeExcerpt(content, 150)

      const ts = data.date ? Date.parse(data.date) : NaN
      const publishedAt = Number.isFinite(ts) ? ts : 0

      const post: Post = {
        slug,
        title: data.title || '无标题',
        date: data.date ? new Date(data.date).toLocaleDateString('zh-CN') : '未知日期',
        tags: data.tags || [],
        content,
        excerpt
      }

      return { post, publishedAt }
    })
  )

  return items
    .sort((a, b) => b.publishedAt - a.publishedAt)
    .map(({ post }) => post)
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    // 解码URL编码的slug
    const decodedSlug = decodeURIComponent(slug)
    const fullPath = path.join(postsDirectory, `${decodedSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // 使用remark将markdown转换为HTML
    const processedContent = await remark()
      .use(remarkHtml)
      .process(content)
    let contentHtml = processedContent.toString()
    // 将内容中的所有 h1 降级为 h2，避免与页面标题重复
    contentHtml = contentHtml
      .replace(/<h1(\s[^>]*)?>/g, '<h2$1>')
      .replace(/<\/h1>/g, '</h2>')
    
    return {
      slug,
      title: data.title || '无标题',
      date: data.date ? new Date(data.date).toLocaleDateString('zh-CN') : '未知日期',
      tags: data.tags || [],
      content: contentHtml,
      excerpt: makeExcerpt(content, 150)
    }
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error)
    return undefined
  }
}