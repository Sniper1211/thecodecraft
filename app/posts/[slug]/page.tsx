import { getPostBySlug, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(decodeURIComponent(params.slug))
  
  if (!post) {
    return {
      title: '文章未找到 - The Code Craft',
      description: '抱歉，您访问的文章不存在。',
    }
  }

  const baseUrl = 'https://www.thecodecraft.site'
  const postUrl = `${baseUrl}/posts/${encodeURIComponent(post.slug)}/`
  // 使用更短的页面描述，防止过长
  const metaDescription = post.excerpt
  
  return {
    title: `${post.title} - The Code Craft`,
    description: metaDescription,
    keywords: post.tags && post.tags.length ? post.tags : ['编程', '技术博客', '独立开发', '前端开发', '全栈开发', '建站教程'],
    authors: [{ name: 'The Code Craft' }],
    creator: 'The Code Craft',
    publisher: 'The Code Craft',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: metaDescription,
      url: postUrl,
      siteName: 'The Code Craft',
      locale: 'zh_CN',
      type: 'article',
      publishedTime: post.date,
      authors: ['The Code Craft'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: metaDescription,
      creator: '@thecodecraft',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(decodeURIComponent(params.slug))

  if (!post) {
    notFound()
  }

  const baseUrl = 'https://www.thecodecraft.site'
  const postUrl = `${baseUrl}/posts/${encodeURIComponent(post.slug)}/`
  const metaDescription = post.excerpt
  
  // 结构化数据
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: metaDescription,
    author: {
      '@type': 'Person',
      name: 'The Code Craft',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Code Craft',
      url: baseUrl,
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    url: postUrl,
    keywords: (post.tags || []).join(', '),
    articleSection: 'Technology',
    inLanguage: 'zh-CN',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/10 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* 文章头部 */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center text-slate-600 dark:text-slate-400 space-y-3 sm:space-y-0 sm:space-x-8">
            <time className="flex items-center text-sm font-medium bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </time>
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-4 py-1.5 rounded-full font-medium shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>
        
        {/* 文章内容 */}
        <div className="article-content">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-black prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:font-black prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:text-slate-800 dark:prose-code:text-slate-200 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-white prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800 prose-blockquote:italic prose-table:border-slate-200 prose-img:rounded-2xl prose-img:shadow-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        
        {/* 文章底部 */}
        <footer className="mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex justify-between items-center">
            <a href="/" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </a>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              感谢阅读
            </div>
          </div>
        </footer>
      </div>
    </article>
    </>
  )
}