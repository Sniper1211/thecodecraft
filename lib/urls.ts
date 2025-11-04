export function buildPostHref(slug: string): string {
  // 使用原始 slug 构建路径，保持与 generateStaticParams 返回值一致
  // 浏览器在请求过程中会处理必要的编码，Next 路由层会解码 params
  return `/posts/${slug}/`
}

export function buildPostUrl(baseUrl: string, slug: string): string {
  const base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return `${base}${buildPostHref(slug)}`
}