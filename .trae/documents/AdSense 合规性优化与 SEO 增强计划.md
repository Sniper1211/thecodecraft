# AdSense 合规性优化与 SEO 增强计划

## 当前状态分析
1. **缺少关键合规页面**：无隐私政策页和联系页面
2. **页脚不完整**：缺少法律合规链接
3. **关于页面权威性不足**：缺少作者简介和详细使命说明
4. **导航栏过于简单**：只有"首页"和"关于"两个链接
5. **存在占位文本**：发现一篇博客文章包含"Hello World!"占位文本
6. **SEO基础良好**：已有正确的sitemap.ts和robots.ts配置

## 实施计划

### 1. 新增法律合规路由
- **创建 `/app/privacy/page.tsx`**：包含符合AdSense要求的隐私政策，涵盖Cookie使用、Google AdSense DART Cookie、第三方广告商声明
- **创建 `/app/contact/page.tsx`**：提供联系邮箱 `hello@thecodecraft.site` 和简单联系表单

### 2. 优化页脚组件
- **修改 `app/layout.tsx` 中的页脚部分**：添加"法律与合规"链接行，包含 `/about`、`/privacy`、`/contact` 链接
- **确保响应式设计和对比度合规**

### 3. 增强"关于"页面权威性
- **重构 `app/about/page.tsx`**：
  - 添加作者简介模块（头像占位符、姓名、职业背景"Full Stack Developer & Indie Hacker"）
  - 细化站点使命，强调"为开发者提供深度技术教程和出海经验分享"
  - 在页面底部增强E-E-A-T，展示联系方式和GitHub/Twitter链接

### 4. 优化导航栏
- **修改 `app/layout.tsx` 中的导航栏**：
  - 添加分类导航菜单，包含：Technical Tutorials、Indie Hacking、Digital Nomad
  - 使用下拉菜单或平铺菜单形式

### 5. 技术SEO优化
- **检查 `app/sitemap.ts`**：确保包含所有文章链接（当前已正确配置）
- **检查 `app/robots.ts`**：确保User-agent: * Allow: /（当前已正确配置）
- **Metadata增强**：已在layout.tsx中正确配置动态title和description

### 6. 内容占位符清理
- **清理占位文本**：修改 `_posts/how-to-build-website-for-free.md` 中的"Hello World!"占位文本
- **检查404死链**：验证所有内部链接有效性

## 预期效果
- **AdSense合规性**：满足隐私政策、联系页面、网站真实性等强制性要求
- **SEO提升**：改善网站结构，增强E-E-A-T信号，提高搜索引擎抓取效率
- **用户体验**：提供更完整的网站导航和法律信息

## 风险与注意事项
- 隐私政策内容需要符合Google AdSense的具体要求
- 修改导航栏可能影响现有布局，需要确保响应式兼容
- 历史文章中的占位文本需要替换为有意义的实际内容