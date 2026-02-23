import { getPostsByCategory } from '@/lib/posts'
import { buildPostHref } from '@/lib/urls'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ category: string }>
}

// 定义有效的分类
const VALID_CATEGORIES = ['技术教程', '独立开发', '数字游民']

// 分类映射：URL 参数到显示名称
const CATEGORY_MAP: Record<string, string> = {
  'technical': '技术教程',
  'indie': '独立开发', 
  'nomad': '数字游民'
}

// 反向映射：显示名称到 URL 参数
const REVERSE_CATEGORY_MAP: Record<string, string> = {
  '技术教程': 'technical',
  '独立开发': 'indie',
  '数字游民': 'nomad'
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  
  // 转换 URL 参数为显示名称
  const displayCategory = CATEGORY_MAP[category] || category
  
  // 检查是否为有效分类
  if (!VALID_CATEGORIES.includes(displayCategory)) {
    notFound()
  }
  
  const posts = await getPostsByCategory(displayCategory)
  
  // 分类页面结构化数据
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${displayCategory} - The Code Craft`,
    description: `The Code Craft 网站上的 ${displayCategory} 分类文章`,
    url: `https://www.thecodecraft.site/categories/${category}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: post.title,
          url: `https://www.thecodecraft.site/posts/${post.slug}`,
          datePublished: post.date,
          author: {
            '@type': 'Person',
            name: 'The Code Craft'
          }
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-space-950">
        {/* Hero Section */}
        <section className="relative py-24 bg-grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-500/5 via-neonGreen-500/5 to-transparent"></div>
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6 leading-tight tracking-tight">
              {displayCategory}
            </h1>
            <p className="text-lg md:text-xl text-space-400 max-w-2xl mx-auto leading-relaxed font-normal">
              探索 {displayCategory} 相关的技术文章和实践经验
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              {VALID_CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${REVERSE_CATEGORY_MAP[cat] || cat.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    displayCategory === cat 
                      ? 'bg-gradient-to-r from-neon-500 to-neonGreen-500 text-space-950 border border-neon-500/30 shadow-glow-tech' 
                      : 'bg-space-800/50 text-space-300 border border-space-700/50 hover:bg-space-700/50 hover:border-space-600/50'
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                {posts.length} 篇文章
              </h2>
              <p className="text-lg text-space-400 max-w-2xl mx-auto font-normal">
                以下是 {displayCategory} 分类下的所有文章
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={buildPostHref(post.slug)}
                    aria-label={post.title}
                    className="group block hover:no-underline focus:outline-none fade-in-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="bg-space-900/95 backdrop-blur-sm rounded-2xl p-8 shadow-tech border border-space-800/60 hover:shadow-tech-lg transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 hover:scale-105">
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
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-space-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-space-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">暂无文章</h3>
                <p className="text-space-400 mb-8">该分类下暂时没有文章</p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-gradient-to-r from-neon-500 to-neonGreen-500 text-space-950 px-6 py-3 rounded-full font-medium hover:shadow-glow-tech-lg transition-all duration-300 transform hover:-translate-y-1 border border-neon-500/30"
                >
                  返回首页
                </Link>
              </div>
            )}

            {/* 返回首页 */}
            <div className="mt-16 text-center">
              <Link
                href="/"
                className="inline-flex items-center bg-space-800/50 text-space-300 px-6 py-3 rounded-full font-medium hover:bg-space-700/50 transition-all duration-300 border border-space-700/50 hover:border-space-600/50"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                返回首页
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// 生成静态参数
export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({
    category,
  }))
}

// 设置页面标题和描述
export async function generateMetadata({ params }: PageProps) {
  const { category } = await params
  const displayCategory = CATEGORY_MAP[category] || category
  
  return {
    title: `${displayCategory} - The Code Craft`,
    description: `探索 The Code Craft 网站上 ${displayCategory} 分类的技术文章和实践经验`,
    openGraph: {
      title: `${displayCategory} - The Code Craft`,
      description: `探索 The Code Craft 网站上 ${displayCategory} 分类的技术文章和实践经验`,
      type: 'website',
    },
  }
}