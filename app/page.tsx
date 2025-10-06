import { getPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="bg-white dark:bg-gray-800">
      {/* 英雄区域 */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              技术博客与独立开发
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              分享技术实践、编程知识和独立开发经验，助力开发者成长
            </p>
          </div>
        </div>
      </section>

      {/* 文章列表 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">最新文章</h2>
            <p className="text-gray-600 dark:text-gray-400">探索最新的技术见解和实践经验</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="card hover:shadow-lg transition-shadow duration-300 group">
                <Link href={`/posts/${post.slug}`} className="block">
                  <div className="mb-4">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">暂无文章</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}