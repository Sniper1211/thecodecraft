import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'The Code Craft - 技术博客与独立开发',
    template: '%s | The Code Craft'
  },
  description: '分享技术实践、编程知识和独立开发经验',
  keywords: ['编程', '技术博客', '独立开发', '前端开发', '全栈开发'],
  authors: [{ name: 'The Code Craft' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'The Code Craft',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-172XYV0NGN`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-172XYV0NGN');
            `,
          }}
        />
        {/* Google AdSense */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9245714228354292"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="flex flex-col min-h-screen">
          {/* 导航栏 */}
          <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-8">
                  <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-500 transition-colors">
                    The Code Craft
                  </a>
                  <nav className="hidden md:flex space-x-6">
                    <a href="/" className="nav-link">首页</a>
                    <a href="/about" className="nav-link">关于</a>
                  </nav>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* 主内容区域 */}
          <main className="flex-1">
            {children}
          </main>

          {/* 页脚 */}
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">The Code Craft</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    分享技术实践、编程知识和独立开发经验
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">链接</h4>
                  <div className="space-y-2">
                    <a href="/" className="block text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">首页</a>
                    <a href="/about" className="block text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">关于</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">联系</h4>
                  <p className="text-gray-600 dark:text-gray-400">欢迎交流技术问题</p>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  © 2025 The Code Craft. 基于 Next.js 构建
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}