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

export async function getPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      // 生成摘要（取前150个字符）
      const excerpt = content.substring(0, 150) + '...'
      
      return {
        slug,
        title: data.title || '无标题',
        date: data.date ? new Date(data.date).toLocaleDateString('zh-CN') : '未知日期',
        tags: data.tags || [],
        content,
        excerpt
      } as Post
    })
  )
  
  // 按日期排序
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
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
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      title: data.title || '无标题',
      date: data.date ? new Date(data.date).toLocaleDateString('zh-CN') : '未知日期',
      tags: data.tags || [],
      content: contentHtml,
      excerpt: content.substring(0, 150) + '...'
    }
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error)
    return undefined
  }
}