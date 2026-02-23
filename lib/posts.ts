import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const postsDirectory = path.join(process.cwd(), '_posts')

export interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
  categories: string[]
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
      // 读取 front matter，优先使用自定义 slug；否则回退到文件名（统一为 NFC）
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const slug = (data.slug ? String(data.slug).trim() : fileName.replace(/\.md$/, '').normalize('NFC'))

      const excerpt = makeExcerpt(content, 150)

      const ts = data.date ? Date.parse(data.date) : NaN
      const publishedAt = Number.isFinite(ts) ? ts : 0

      const post: Post = {
        slug,
        title: data.title || '无标题',
        date: data.date ? new Date(data.date).toLocaleDateString('zh-CN') : '未知日期',
        tags: data.tags || [],
        categories: data.categories || [],
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

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getPosts()
  return allPosts.filter(post => {
    // 安全地处理categories字段，确保它是数组
    const categories = post.categories
    
    // 如果categories不存在或为空，返回false
    if (!categories) return false
    
    // 处理不同类型的categories字段
    let categoriesArray: string[] = []
    
    if (Array.isArray(categories)) {
      // 已经是数组，直接使用
      categoriesArray = categories
    } else if (typeof categories === 'string') {
      // 如果是字符串，转换为数组
      categoriesArray = [categories]
    } else {
      // 其他类型，尝试转换为字符串数组
      try {
        categoriesArray = Array.from(categories as any).map(String)
      } catch {
        // 转换失败，返回空数组
        categoriesArray = []
      }
    }
    
    // 过滤空值并转换为小写进行比较
    const normalizedCategories = categoriesArray
      .filter(cat => cat && typeof cat === 'string')
      .map(cat => cat.toLowerCase().trim())
    
    const normalizedTarget = category.toLowerCase().trim()
    
    // 检查是否匹配
    return normalizedCategories.some(cat => 
      cat === normalizedTarget || 
      cat.includes(normalizedTarget) || 
      normalizedTarget.includes(cat)
    )
  })
}

export async function getPostBySlug(slugParam: string): Promise<Post | undefined> {
  try {
    // 兼容特殊字符与 Unicode 归一化，并支持 front matter 自定义 slug
    const wanted = slugParam.normalize('NFC')
    try {
      fs.appendFileSync(path.join(process.cwd(), '.next', 'post-debug.log'), `param:${slugParam}\n`)
    } catch {}
    const fileNames = fs.readdirSync(postsDirectory)
    const targetFile = fileNames.find((fn) => {
      const fullPath = path.join(postsDirectory, fn)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      const filenameSlug = fn.replace(/\.md$/, '').normalize('NFC')
      const frontSlug = data.slug ? String(data.slug).trim() : undefined
      const candidates = [frontSlug, filenameSlug].filter(Boolean) as string[]
      try {
        fs.appendFileSync(
          path.join(process.cwd(), '.next', 'post-debug.log'),
          `candidates for ${fn}: ${JSON.stringify(candidates)}\n`
        )
      } catch {}
      return candidates.some((s) => (
        s === wanted ||
        s === decodeURIComponent(wanted) ||
        encodeURIComponent(s) === wanted
      ))
    })
    try {
      fs.appendFileSync(path.join(process.cwd(), '.next', 'post-debug.log'), `matched:${String(targetFile)}\n`)
    } catch {}

    if (!targetFile) {
      throw new Error(`Post not found for slug: ${slugParam}`)
    }

    const fullPath = path.join(postsDirectory, targetFile)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    let contentHtml: string
    try {
      const md = new MarkdownIt({ html: true, linkify: true, breaks: true })
      contentHtml = md.render(content)
    } catch (e) {
      const escaped = content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
      contentHtml = `<pre class="not-prose">${escaped}</pre>`
      try {
        fs.appendFileSync(
          path.join(process.cwd(), '.next', 'post-debug.log'),
          `markdown-it fallback for ${slugParam}: ${String((e as Error).message)}\n`
        )
      } catch {}
    }
    contentHtml = contentHtml
      .replace(/<h1(\s[^>]*)?>/g, '<h2$1>')
      .replace(/<\/h1>/g, '</h2>')

    return {
      slug: (data.slug ? String(data.slug).trim() : targetFile.replace(/\.md$/, '').normalize('NFC')),
      title: data.title || '无标题',
      date: data.date ? new Date(data.date).toLocaleDateString('zh-CN') : '未知日期',
      tags: data.tags || [],
      categories: data.categories || [],
      content: contentHtml,
      excerpt: makeExcerpt(content, 150)
    }
  } catch (error) {
    try {
      fs.appendFileSync(
        path.join(process.cwd(), '.next', 'post-debug.log'),
        `error for ${slugParam}: ${String((error as Error).stack || error)}\n`
      )
    } catch {}
    console.error(`Error getting post by slug ${slugParam}:`, error)
    return undefined
  }
}