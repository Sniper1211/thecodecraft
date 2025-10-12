'use client'

import Script from 'next/script'

// Adsterra 配置（来自你提供的代码）
const AD_SCRIPT_SRC = 'https://pl27837621.effectivegatecpm.com/417fe7b0a0aa52264b071ebc557b76c7/invoke.js'
const CONTAINER_ID = 'container-417fe7b0a0aa52264b071ebc557b76c7'

export default function AdsterraBanner() {
  // 仅在生产环境渲染广告，避免本地开发干扰
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <div className="container-custom my-6">
      <div className="rounded-xl border border-slate-200/60 p-3 bg-white/70">
        <Script
          src={AD_SCRIPT_SRC}
          strategy="afterInteractive"
          async
          data-cfasync="false"
        />
        <div id={CONTAINER_ID} />
      </div>
    </div>
  )
}