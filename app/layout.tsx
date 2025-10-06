import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Code Craft - 技术博客与独立开发',
  description: '分享技术实践、编程知识和独立开发经验',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head />
      <body className={inter.className}>
        {/* Google Analytics - 使用Next.js的Script组件正确加载 */}
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
        {/* Google AdSense - 使用Next.js的Script组件正确加载 */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9245714228354292"
          crossOrigin="anonymous"
        />
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">我的博客</h1>
            <nav className="mt-4">
              <a href="/" className="text-blue-600 hover:text-blue-800 mr-4">首页</a>
              <a href="/about" className="text-blue-600 hover:text-blue-800">关于</a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 mt-12">
          <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600">
            <p>© 2025 我的博客. 基于Next.js构建</p>
          </div>
        </footer>
      </body>
    </html>
  )
}