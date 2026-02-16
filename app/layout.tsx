import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import Analytics from '@/components/Analytics'
import AdSense from '@/components/AdSense'

import Copyright from '@/components/Copyright'

export const metadata: Metadata = {
  title: {
    default: 'The Code Craft - 全栈开发与数字游民指南',
    template: '%s | The Code Craft'
  },
  description: '专注于全栈开发技术分享、独立开发实践经验、SEO优化技巧以及数字游民生活方式。提供高质量的编程教程、建站资源和实用工具推荐。',
  keywords: ['编程', '技术博客', '独立开发', '全栈开发', 'Next.js', 'React', 'TypeScript', 'SEO优化', '数字游民', '建站教程', '域名优惠', 'Spaceship'],
  authors: [{ name: 'The Code Craft' }],
  creator: 'The Code Craft',
  publisher: 'The Code Craft',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.thecodecraft.site'),
  alternates: {
    canonical: 'https://www.thecodecraft.site',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.thecodecraft.site',
    siteName: 'The Code Craft',
    title: 'The Code Craft - 全栈开发与数字游民指南',
    description: '专注于全栈开发技术分享、独立开发实践经验、SEO优化技巧以及数字游民生活方式。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Code Craft - 全栈开发与数字游民指南',
    description: '专注于全栈开发技术分享、独立开发实践经验、SEO优化技巧以及数字游民生活方式。',
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
  verification: {
    google: 'your-google-verification-code', // 您可以稍后替换为实际的验证码
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
          <meta name="google-adsense-account" content="ca-pub-9245714228354292" />
          <Analytics />
          <AdSense />
        </head>
      <body className="antialiased bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 font-sans min-h-screen">
        <div className="flex flex-col min-h-screen">
          {/* 精致导航栏 */}
          <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 shadow-elegant">
            <div className="container-custom">
              <div className="flex justify-between items-center h-28">
                <a 
                  href="/" 
                  className="text-4xl font-black text-gradient-hero hover:scale-105 transition-all duration-500 tracking-tighter"
                >
                  The Code Craft
                </a>
                
                <nav className="flex items-center space-x-16">
                  <a href="/" className="nav-link text-xl font-semibold">首页</a>
                  <a href="/about" className="nav-link text-xl font-semibold">关于</a>
                  <div className="relative group">
                    <button className="nav-link text-xl font-semibold flex items-center">
                      分类
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 dark:bg-slate-800/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-slate-200/60 dark:border-slate-700/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        <a href="/posts?category=technical" className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          技术教程
                        </a>
                        <a href="/posts?category=indie" className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          独立开发
                        </a>
                        <a href="/posts?category=nomad" className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          数字游民
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>

          {/* 主内容区域 */}
          <main className="flex-1">
            {children}
          </main>

          {/* 精致页脚 */}
          <footer className="bg-white/90 backdrop-blur-2xl border-t border-slate-200/60 py-24">
            <div className="container-custom">
              <div className="text-center">
                <div className="flex justify-center items-center mb-16">
                  <a 
                    href="/" 
                    className="text-4xl font-black text-gradient-hero tracking-tighter"
                  >
                    The Code Craft
                  </a>
                </div>
                
                <p className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto mb-16 font-normal">
                  探索编程艺术，分享技术实践，记录独立开发旅程
                </p>
                
                <div className="flex justify-center space-x-20 mb-16">
                  <a href="/" className="nav-link text-lg font-medium">首页</a>
                  <a href="/about" className="nav-link text-lg font-medium">关于</a>
                  <a href="/privacy" className="nav-link text-lg font-medium">隐私政策</a>
                  <a href="/contact" className="nav-link text-lg font-medium">联系我们</a>
                </div>
                
                <div className="border-t border-slate-200/60 pt-16">
                  <p className="text-slate-500 text-sm font-medium">
                    © <Copyright /> The Code Craft. 基于 Next.js 构建
                  </p>
                  <div className="mt-4 flex justify-center space-x-8">
                    <a href="/about" className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium transition-colors">关于</a>
                    <a href="/privacy" className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium transition-colors">隐私政策</a>
                    <a href="/contact" className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium transition-colors">联系我们</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
