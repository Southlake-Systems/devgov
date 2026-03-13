import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)

  return files.map((file) => {
    const slug = file.replace(".md", "")

    const fullPath = path.join(postsDirectory, file)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(fileContents)

    return {
      slug,
      ...data,
    }
  })
}

export async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content)

  return {
    ...data,
    content: processed.toString(),
  }
}