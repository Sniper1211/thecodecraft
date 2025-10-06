export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面头部 */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            关于本站
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            一个专注于技术分享和个人成长的博客平台
          </p>
        </header>

        {/* 主要内容 */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">关于我们</h2>
            <p className="text-gray-700 dark:text-gray-300">
              这是一个基于Next.js构建的现代博客系统，致力于为开发者提供优质的技术内容和学习资源。
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              我们相信技术的分享和交流能够促进个人成长和行业发展，希望通过这个平台连接更多的技术爱好者。
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">技术特色</h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• 现代化的响应式设计</li>
              <li>• 优秀的阅读体验</li>
              <li>• 快速的页面加载速度</li>
              <li>• 搜索引擎友好</li>
              <li>• 支持暗色模式</li>
            </ul>
          </div>
        </div>

        {/* 技术栈卡片 */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">技术栈</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-600 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white">Next.js 14</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">React全栈框架</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-600 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white">TypeScript</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">类型安全</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-600 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">实用优先CSS</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-600 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white">Vercel</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">部署平台</p>
              </div>
            </div>
          </div>
        </div>

        {/* 联系信息 */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">联系我们</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            如有问题或建议，欢迎通过GitHub Issues联系
          </p>
          <a 
            href="https://github.com/Sniper1211/thecodecraft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub 仓库
          </a>
        </div>
      </div>
    </div>
  )
}