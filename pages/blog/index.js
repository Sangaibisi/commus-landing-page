// pages/blog/index.js
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'

export default function BlogIndex({ posts }) {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug} className="mb-4">
            <Link href={`/blog/${slug}`}>
              <a className="text-2xl text-blue-600 hover:underline">
                {frontmatter.title}
              </a>
            </Link>
            <p className="text-sm text-gray-500">{frontmatter.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content/blog'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('content/blog', filename), 'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    const slug = filename.replace('.md', '')
    return { slug, frontmatter }
  })
  return { props: { posts } }
}
