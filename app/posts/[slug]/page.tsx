import { getPostBySlug, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: encodeURIComponent(post.slug),
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(decodeURIComponent(params.slug))
  
  if (!post) {
    return {
      title: '文章未找到',
    }
  }
  
  return {
    title: `${post.title} - The Code Craft`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(decodeURIComponent(params.slug))

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 mb-4">
          <time>{post.date}</time>
          <span className="mx-2">•</span>
          <div className="flex space-x-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>
      
      <div 
        className="article-content prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}