'use client'

import Script from 'next/script'

const ADSENSE_CLIENT_ID = 'ca-pub-9245714228354292'

export default function AdSense() {
  // 开发环境不渲染任何脚本
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      onLoad={() => {
        console.log('AdSense: Google AdSense 脚本加载成功')
      }}
      onError={(e) => {
        console.warn('AdSense: Google AdSense 脚本加载失败', e)
      }}
    />
  )
}