import { getAllPosts } from "@/lib/blogs"
import Link from "next/link"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className="mb-8 border-b pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-white/60">{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}