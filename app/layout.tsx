import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import Analytics from '@/components/Analytics'
import AdSense from '@/components/AdSense'

import Copyright from '@/components/Copyright'

export const metadata: Metadata = {
  title: {
    default: 'The Code Craft - 技术博客与独立开发',
    template: '%s | The Code Craft'
  },
  description: '探索编程艺术，分享技术实践，记录独立开发旅程。提供前端开发、全栈开发、建站教程等高质量技术内容。',
  keywords: ['编程', '技术博客', '独立开发', '前端开发', '全栈开发', 'Next.js', 'React', 'JavaScript', 'TypeScript', 'Vercel', '建站教程'],
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
    title: 'The Code Craft - 技术博客与独立开发',
    description: '探索编程艺术，分享技术实践，记录独立开发旅程。提供前端开发、全栈开发、建站教程等高质量技术内容。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Code Craft - 技术博客与独立开发',
    description: '探索编程艺术，分享技术实践，记录独立开发旅程',
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
                </div>
                
                <div className="border-t border-slate-200/60 pt-16">
                  <p className="text-slate-500 text-sm font-medium">
                    © <Copyright /> The Code Craft. 基于 Next.js 构建 🚀
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
