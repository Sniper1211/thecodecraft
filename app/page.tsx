import { getPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">最新文章</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-6">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-bold text-blue-600 hover:text-blue-800 mb-2">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
            <div className="mt-2">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-block bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded mr-2">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}