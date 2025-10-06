import { getPostBySlug, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: encodeURIComponent(post.slug),
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(decodeURIComponent(params.slug))
  
  if (!post) {
    return {
      title: '文章未找到',
    }
  }
  
  return {
    title: `${post.title} - The Code Craft`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(decodeURIComponent(params.slug))

  if (!post) {
    notFound()
  }

  return (
    <article className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 文章头部 */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center text-gray-600 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-6">
            <time className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </time>
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 text-sm px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>
        
        {/* 文章内容 */}
        <div className="article-content">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-semibold prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-code:bg-gray-100 dark:prose-code:bg-gray-700 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white prose-blockquote:border-l-primary-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-700 prose-blockquote:italic prose-table:border-gray-200 prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        
        {/* 文章底部 */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <a href="/" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </a>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              感谢阅读
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}