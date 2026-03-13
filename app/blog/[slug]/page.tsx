import { getPost } from "@/lib/blogs"

export default async function Post(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params
  const slug = params.slug

  const post = await getPost(slug)

  return (
<article
  className="prose prose-invert max-w-3xl mx-auto py-20 font-poppins"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>
  )
}