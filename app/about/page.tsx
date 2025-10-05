export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">关于本站</h1>
      <div className="prose lg:prose-xl">
        <p>这是一个基于Next.js构建的简单博客系统，专注于技术分享和个人成长。</p>
        
        <h2>技术栈</h2>
        <ul>
          <li>Next.js 14 - React全栈框架</li>
          <li>TypeScript - 类型安全的JavaScript</li>
          <li>Tailwind CSS - 实用优先的CSS框架</li>
          <li>Markdown - 文章内容格式</li>
        </ul>
        
        <h2>部署方式</h2>
        <p>本站部署在Vercel平台，支持自动构建和持续部署。</p>
        
        <h2>联系方式</h2>
        <p>如有问题或建议，欢迎通过GitHub Issues联系。</p>
      </div>
    </div>
  )
}