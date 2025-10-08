'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const GA_TRACKING_ID = 'G-172XYV0NGN'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function Analytics() {
  useEffect(() => {
    // 仅在生产环境启用 Analytics
    if (process.env.NODE_ENV !== 'production') {
      console.log('Analytics: 开发环境，跳过 Google Analytics 加载')
      return
    }

    // 检查是否已经加载
    if (typeof window.gtag === 'function') {
      console.log('Analytics: Google Analytics 已加载')
      return
    }

    // 检测广告拦截器
    const testImg = new Image()
    testImg.onload = () => {
      console.log('Analytics: 网络连接正常')
    }
    testImg.onerror = () => {
      console.warn('Analytics: 可能被广告拦截器阻止或网络问题')
    }
    testImg.src = 'https://www.google-analytics.com/collect?v=1&t=pageview&tid=' + GA_TRACKING_ID + '&cid=test'
  }, [])

  // 开发环境不渲染任何脚本
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        onLoad={() => {
          console.log('Analytics: Google Analytics 脚本加载成功')
        }}
        onError={(e) => {
          console.error('Analytics: Google Analytics 脚本加载失败', e)
        }}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Analytics: Google Analytics 初始化完成')
        }}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              // 添加调试信息
              debug_mode: false,
              // 处理错误
              transport_type: 'beacon',
              // 隐私设置
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
            
            // 添加错误处理
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              custom_parameter: 'analytics_loaded'
            });
            
            console.log('Analytics: 页面浏览事件已发送');
          `,
        }}
      />
    </>
  )
}

// 导出用于手动跟踪事件的函数
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Analytics (Dev):', { action, category, label, value })
    return
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
    console.log('Analytics: 事件已跟踪', { action, category, label, value })
  } else {
    console.warn('Analytics: gtag 函数不可用')
  }
}

// 导出用于跟踪页面浏览的函数
export const trackPageView = (url: string, title?: string) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Analytics (Dev): 页面浏览', { url, title })
    return
  }

  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    })
    console.log('Analytics: 页面浏览已跟踪', { url, title })
  } else {
    console.warn('Analytics: gtag 函数不可用')
  }
}