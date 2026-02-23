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
      <div className="min-h-screen bg-space-950">
      {/* Hero Section */}
      <section className="relative py-32 bg-grid-pattern scan-line">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-500/5 via-neonGreen-500/5 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black gradient-text mb-8 leading-tight tracking-tight fade-in-up">
            The Code Craft
          </h1>
          <p className="text-xl md:text-2xl text-space-400 max-w-2xl mx-auto leading-relaxed font-normal fade-in-up" style={{animationDelay: '0.2s'}}>
            探索<span className="font-semibold text-neon-500 glow-tech">前沿技术</span>，分享<span className="font-semibold text-neonGreen-500 glow-green">实践经验</span>，记录<span className="font-semibold text-neon-400">成长历程</span>
          </p>
          {/* 装饰性科技元素 */}
          <div className="mt-16 flex justify-center space-x-8">
            <div className="w-3 h-3 rounded-full bg-neon-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-neonGreen-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-3 h-3 rounded-full bg-neon-500 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">精选文章</h2>
            <p className="text-lg text-space-400 max-w-2xl mx-auto font-normal">深入浅出的技术分享，助你快速成长</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <>
                <article key={post.slug}>
                  <Link
                    href={buildPostHref(post.slug)}
                    aria-label={post.title}
                    className="group block hover:no-underline focus:outline-none fade-in-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="bg-space-900/95 backdrop-blur-sm rounded-2xl p-8 shadow-tech border border-space-800/60 hover:shadow-tech-lg transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 hover:scale-105 float">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-500 transition-colors line-clamp-2 leading-relaxed tracking-tight">
                          {post.title}
                        </h3>
                        <p className="text-space-300 mb-6 line-clamp-3 flex-1 leading-relaxed text-sm font-normal">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-space-800/60">
                        <time className="text-xs text-space-400 font-medium">
                          {post.date}
                        </time>
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="bg-neon-500/10 text-neon-500 text-xs px-2.5 py-1 rounded-full font-medium border border-neon-500/20 hover:bg-neon-500/20 hover:border-neon-500/40 transition-colors">
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="text-xs text-space-500">
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
              <div className="w-20 h-20 bg-space-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-space-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">暂无文章</h3>
              <p className="text-space-400">稍后再来看看吧</p>
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  )
}