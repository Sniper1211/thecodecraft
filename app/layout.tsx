import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'The Code Craft - 技术博客与独立开发',
    template: '%s | The Code Craft'
  },
  description: '探索编程艺术，分享技术实践，记录独立开发旅程',
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
                    © 2025 The Code Craft. 基于 Next.js 构建
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