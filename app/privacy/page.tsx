import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隐私政策',
  description: 'The Code Craft 网站的隐私政策，详细说明我们如何收集、使用和保护您的个人信息，包括 Cookie 使用和 Google AdSense DART Cookie 相关信息。',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/10">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/3 dark:via-purple-500/3 dark:to-pink-500/3"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
            隐私政策
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            保护您的隐私是我们的首要任务
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-10 shadow-sm border border-slate-100/60 dark:border-slate-700/60">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>1. 信息收集</h2>
              <p>当您访问 The Code Craft 网站时，我们可能会收集以下类型的信息：</p>
              <ul>
                <li><strong>日志数据</strong>：包括您的 IP 地址、浏览器类型、访问时间、访问页面等</li>
                <li><strong>设备信息</strong>：包括设备类型、操作系统、屏幕分辨率等</li>
                <li><strong>位置信息</strong>：基于 IP 地址的大致地理位置</li>
              </ul>

              <h2>2. Cookie 使用</h2>
              <p>我们使用 Cookie 来改善您的浏览体验。Cookie 是存储在您设备上的小型文本文件，用于：</p>
              <ul>
                <li>记住您的偏好设置</li>
                <li>分析网站流量和使用情况</li>
                <li>提供个性化内容推荐</li>
              </ul>

              <h3>2.1 Google AdSense DART Cookie</h3>
              <p>作为 Google AdSense 计划的一部分，我们使用 DART Cookie。DART Cookie 允许 Google 根据您对我们网站和其他网站的访问情况向您展示广告。</p>
              <p>您可以通过访问 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google 广告设置页面</a> 选择退出 DART Cookie 的使用。</p>

              <h2>3. 第三方广告商</h2>
              <p>我们允许第三方广告公司在我们的网站上投放广告。这些公司可能会使用 Cookie 和网络信标等技术来收集有关您访问本网站和其他网站的信息，以便为您提供感兴趣的广告。</p>
              <p>这些第三方广告商包括但不限于：</p>
              <ul>
                <li>Google AdSense</li>
                <li>其他经批准的广告合作伙伴</li>
              </ul>
              <p>请注意，这些第三方广告商有自己的隐私政策，我们建议您查阅他们的政策以了解他们如何处理您的个人信息。</p>

              <h2>4. 信息使用</h2>
              <p>我们收集的信息用于以下目的：</p>
              <ul>
                <li>维护和改进网站功能</li>
                <li>分析用户行为以优化内容</li>
                <li>提供个性化用户体验</li>
                <li>展示相关广告</li>
                <li>防止欺诈和滥用</li>
              </ul>

              <h2>5. 信息保护</h2>
              <p>我们采取合理的安全措施来保护您的个人信息免遭未经授权的访问、修改、披露或销毁。然而，请注意，没有任何互联网传输或电子存储方法是 100% 安全的。</p>

              <h2>6. 第三方链接</h2>
              <p>我们的网站可能包含指向其他网站的链接。请注意，我们不对这些网站的隐私实践负责。我们建议您在离开我们的网站时注意阅读每个收集个人身份信息的网站的隐私声明。</p>

              <h2>7. 儿童隐私</h2>
              <p>我们的网站不针对 13 岁以下的儿童。我们不会有意收集 13 岁以下儿童的个人身份信息。如果您是家长或监护人，并且认为您的孩子向我们提供了个人信息，请与我们联系，我们将尽力删除这些信息。</p>

              <h2>8. 隐私政策变更</h2>
              <p>我们可能会不时更新本隐私政策。任何变更将在本页面上发布。我们建议您定期查看本隐私政策以了解任何变更。</p>

              <h2>9. 联系我们</h2>
              <p>如果您对本隐私政策有任何疑问或疑虑，请通过以下方式联系我们：</p>
              <p>邮箱：<a href="mailto:hello@thecodecraft.site">hello@thecodecraft.site</a></p>

              <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  最后更新日期：2026年1月12日
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <a href="/" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}