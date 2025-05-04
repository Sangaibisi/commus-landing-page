import Link from "next/link";

const dummyPosts = [
  {
    slug: "sdlc-coordination",
    title: "Coordinating Complex SDLC Workflows with COMMUS",
    excerpt: "Discover how COMMUS helps large teams align code delivery across development and QA stages.",
  },
  {
    slug: "git-hook-governance",
    title: "Branch Governance Using Git Hooks: The COMMUS Approach",
    excerpt: "Learn how COMMUS uses Git hooks to enforce consistent workflows and prevent conflicts before they happen.",
  },
];

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-10">COMMUS Blog</h1>
      <ul className="space-y-8">
        {dummyPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a className="block p-6 border rounded-xl hover:shadow transition">
                <h2 className="text-2xl font-semibold text-blue-700">{post.title}</h2>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}