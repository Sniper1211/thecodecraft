# The Code Craft

一个基于 Next.js App Router 的静态博客项目。功能包括：Markdown 渲染、中文/英文 slug 支持、站点地图与机器人协议（`sitemap`/`robots`）、以及广告与统计集成（AdSense 与 Google Analytics）。

## 特性
- 使用 `markdown-it` 在服务端渲染 Markdown 内容。
- 通过 `lib/posts.ts` 读取 `posts` 目录下的 Markdown 文件，生成文章列表和详情。
- 统一的 URL 构造工具：`lib/urls.ts` 提供 `buildPostHref` / `buildPostUrl`。
- SEO 友好：`app/sitemap.ts` 和 `app/robots.ts`，文章页 `generateMetadata` 和 JSON-LD。
- 统计与广告：`components/Analytics.tsx` 与 `components/AdSense.tsx`，并可在生产环境展示 `AdsterraBanner`。

## 技术栈
- 框架：`Next.js`（App Router，静态导出）
- 样式：`Tailwind CSS`
- Markdown 渲染：`markdown-it`
- 部署与托管：任意支持静态站点的服务（如 GitHub Pages、Vercel 等）

## 目录结构概览
- `app/`
  - `layout.tsx`：站点根布局与全局 `<head>`，加载 Analytics 与 AdSense。
  - `page.tsx`：首页，展示文章列表，使用 `buildPostHref` 构造链接。
  - `posts/[slug]/page.tsx`：文章详情页，静态生成、SEO 元信息与 JSON-LD。
  - `sitemap.ts`、`robots.ts`：站点地图与机器人协议。
  - `globals.css`：全局样式（Tailwind 入口）。
- `components/`
  - `Analytics.tsx`：Google Analytics 统计与事件。
  - `AdSense.tsx`：Google AdSense 代码加载与验证。
  - `AdsterraBanner.tsx`：生产环境展示的 Adsterra 横幅。
- `lib/`
  - `posts.ts`：读取、解析 Markdown，生成 `slug`、`excerpt`、`content` 等。
  - `urls.ts`：站点 URL/HREF 构造工具。
- `public/`：静态资源（例如 `ads.txt`）。

## 开发与构建
- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 生产构建：`npm run build`
- 静态导出（如需）：`next.config.js` 可配置输出为静态资源或依托平台部署。

## 内容写作
- 在 `posts/` 目录下新增 Markdown 文件（如 `my-post.md`）。
- 文件名将被规范化为 `slug`，并用于路由：`/posts/[slug]`。
- `lib/posts.ts` 会生成摘要（`excerpt`）并通过 `markdown-it` 渲染为 HTML。

## URL 与 SEO
- 使用 `lib/urls.ts`：
  - `buildPostHref(slug)`：在站内生成文章链接（相对路径）。
  - `buildPostUrl(slug)`：生成完整的文章 URL（含域名），用于 `metadata` 与 JSON-LD。
- `app/posts/[slug]/page.tsx`：
  - `generateStaticParams`：预渲染所有文章详情页。
  - `generateMetadata`：为文章详情页生成标题、描述、OG/Twitter 等。
  - JSON-LD：包含文章结构化数据，便于搜索引擎理解。

## 统计与广告
- `components/Analytics.tsx`：
  - 加载 Google Analytics 并提供 `trackPageView`、`trackEvent`。
  - 在 `app/layout.tsx` 中集成。
- `components/AdSense.tsx`：
  - 加载 AdSense 相关脚本与验证片段。
  - 在 `app/layout.tsx` 中集成。
- `components/AdsterraBanner.tsx`：
  - 仅在生产环境渲染横幅广告。

## 部署建议
- 确认 `sitemap.ts` 与 `robots.ts` 的基础域名与策略正确。
- 确认 `public/ads.txt` 与各广告平台验证要求一致。
- 如使用静态托管，确保构建输出与路由配置匹配（App Router 支持静态导出限制请参考 Next.js 文档）。

## 常见问题
- Markdown 未高亮：本项目未使用 `rehype-highlight`/`highlight.js`；如需代码高亮，建议统一选择一种方案并在 `markdown-it` 或前端样式层处理。
- 统计未生效：检查 `Analytics` 的配置与环境变量，确保在生产环境加载。
- 广告未展示：检查 AdSense/Adsterra 的脚本加载与验证状态，确保域名已授权并且生产环境可访问。

## 维护
- 依赖清理：已移除未用的 `remark`/`rehype` 系列与 `highlight.js`、`http-server`。
- 文档与忽略：已移除 Hugo 遗留项（例如 `.hugo_build.lock`）。
- 如需调整站点基础 URL（影响 `sitemap`/`buildPostUrl`），请同步更新相关常量或环境配置。

---

本 README 已更新为纯 Next.js 项目文档，不再包含 Hugo 相关内容。
