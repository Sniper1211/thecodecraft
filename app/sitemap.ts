import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/posts'
import { buildPostUrl } from '@/lib/urls'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.thecodecraft.site'

  const posts = await getPosts()

  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: buildPostUrl(baseUrl, p.slug),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...baseEntries, ...postEntries]
}
