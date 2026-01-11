import { getPosts } from '@/lib/posts'
import { buildPostHref } from '@/lib/urls'
import Link from 'next/link'
import AdsterraBanner from '@/components/AdsterraBanner'

export default async function Home() {
  const posts = await getPosts()

  // 主页结构化数据
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Code Craft',
    description: '专注于全栈开发技术分享、独立开发实践经验、SEO优化技巧以及数字游民生活方式。',
    url: 'https://www.thecodecraft.site',
    author: {
      '@type': 'Person',
      name: 'The Code Craft',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Code Craft',
      url: 'https://www.thecodecraft.site',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.thecodecraft.site/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    mainEntity: {
      '@type': 'Blog',
      name: 'The Code Craft Blog',
      description: '技术博客与独立开发经验分享',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900/20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/3 dark:via-purple-500/3 dark:to-pink-500/3"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
            The Code Craft
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            探索<span className="font-semibold text-blue-600 dark:text-blue-400">前沿技术</span>，分享<span className="font-semibold text-purple-600 dark:text-purple-400">实践经验</span>，记录<span className="font-semibold text-pink-600 dark:text-pink-400">成长历程</span>
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">精选文章</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">深入浅出的技术分享，助你快速成长</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <>
                <article key={post.slug}>
                  <Link
                    href={buildPostHref(post.slug)}
                    aria-label={post.title}
                    className="group block hover:no-underline focus:outline-none"
                  >
                    <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-100/60 dark:border-slate-700/60 hover:shadow-2xl transition-all duration-500 h-full flex flex-col transform hover:-translate-y-2 hover:scale-105">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-relaxed tracking-tight">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3 flex-1 leading-relaxed text-sm font-normal">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100/60 dark:border-slate-700/60">
                        <time className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {post.date}
                        </time>
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs px-2.5 py-1 rounded-full font-medium">
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="text-xs text-slate-400 dark:text-slate-500">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
                {index === 5 && (
                  <div className="md:col-span-2 lg:col-span-3">
                    <AdsterraBanner />
                  </div>
                )}
              </>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">暂无文章，敬请期待</p>
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  )
}