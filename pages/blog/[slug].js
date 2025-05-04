// pages/blog/[slug].js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export default function BlogPost({ frontmatter, content }) {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{frontmatter.date}</p>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content/blog'))
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('content/blog', slug + '.md'), 'utf-8'
  )
  const { data: frontmatter, content: rawContent } = matter(markdownWithMeta)
  const processedContent = await remark().use(html).process(rawContent)
  const content = processedContent.toString()
  return { props: { frontmatter, content } }
}
