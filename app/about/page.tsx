import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于本站',
  description: 'The Code Craft 是一个专注于技术分享和个人成长的现代化博客平台。了解我们的使命、核心特色以及所使用的技术栈。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/10">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/3 dark:via-purple-500/3 dark:to-pink-500/3"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
            关于本站
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            一个专注于<span className="font-semibold text-blue-600 dark:text-blue-400">技术分享</span>和<span className="font-semibold text-purple-600 dark:text-purple-400">个人成长</span>的现代化博客平台
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Author Introduction */}
          <div className="mb-20">
            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-10 shadow-sm border border-slate-100/60 dark:border-slate-700/60">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Author Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-44 h-44 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">TC</span>
                    </div>
                  </div>
                </div>
                
                {/* Author Info */}
                <div className="flex-1">
                  <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">作者简介</h2>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Sniper1211</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer & Indie Hacker</span>
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      拥有多年全栈开发经验，专注于现代 Web 技术栈。热衷于探索新技术、分享实践经验，并帮助其他开发者成长。
                      同时作为独立开发者，关注数字游民生活方式和出海创业机会。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://github.com/Sniper1211" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a 
                      href="https://twitter.com/thecodecraft" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </a>
                    <a 
                      href="mailto:hello@thecodecraft.site" 
                      className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      邮箱联系
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Mission Card */}
            <div className="group">
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-10 shadow-sm border border-slate-100/60 dark:border-slate-700/60 hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">我们的使命</h2>
                <div className="space-y-5 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  <p className="leading-relaxed">
                    <strong>为开发者提供深度技术教程和出海经验分享</strong>，帮助技术从业者在快速变化的技术世界中保持竞争力。
                  </p>
                  <p className="leading-relaxed">我们相信技术的价值在于分享，每一次的交流都能带来新的启发和进步。</p>
                  <p className="leading-relaxed">通过高质量的内容和实用的工具，我们致力于打造一个开放、友好的技术交流社区，让每一位开发者都能在这里找到成长的方向和动力。</p>
                </div>
              </div>
            </div>

            {/* Features Card */}
            <div className="group">
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl p-10 shadow-sm border border-slate-100/60 dark:border-slate-700/60 hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">核心特色</h2>
                <div className="space-y-4">
                  {[
                    { icon: '📱', text: '现代化响应式设计' },
                    { icon: '⚡', text: '极速页面加载体验' },
                    { icon: '🌙', text: '智能暗色模式支持' },
                    { icon: '🔍', text: '搜索引擎友好优化' },
                    { icon: '📚', text: '优质技术内容分享' },
                    { icon: '🚀', text: '出海创业经验分享' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-lg font-semibold">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">技术栈</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">我们采用现代化的技术栈，确保最佳的用户体验</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Next.js 14', desc: 'React全栈框架', color: 'from-slate-900 to-slate-700' },
                { name: 'TypeScript', desc: '类型安全开发', color: 'from-blue-600 to-blue-400' },
                { name: 'Tailwind CSS', desc: '实用优先CSS', color: 'from-cyan-500 to-blue-500' },
                { name: 'Vercel', desc: '现代化部署', color: 'from-black to-slate-700' }
              ].map((tech, index) => (
                <div key={index} className="group">
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-100/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{tech.name.split(' ')[0].charAt(0)}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center mb-2">{tech.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-center text-sm">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-purple-500/10 dark:from-blue-500/5 dark:via-emerald-500/5 dark:to-purple-500/5 rounded-3xl p-12 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">加入我们</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                欢迎技术爱好者一起交流学习，共同打造更好的技术社区
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/Sniper1211/thecodecraft" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub 仓库
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold rounded-2xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  联系我们
                </a>
              </div>
              
              {/* E-E-A-T Enhancement */}
              <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">专业性与可信度</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                  所有内容均由具有多年实际开发经验的专业人士撰写，确保技术准确性和实用性。
                  我们致力于提供高质量、经过验证的技术建议和出海经验分享。
                </p>
                <div className="flex justify-center space-x-8">
                  <a href="mailto:hello@thecodecraft.site" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                    hello@thecodecraft.site
                  </a>
                  <a href="https://github.com/Sniper1211" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                    GitHub
                  </a>
                  <a href="https://twitter.com/thecodecraft" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}