import {{ useRouter }} from "next/router";

const postMap = {{
  "sdlc-coordination": {{
    title: "Coordinating Complex SDLC Workflows with COMMUS",
    content: `In complex software delivery environments, managing coordination between development, testing, and release teams is a challenge. COMMUS introduces a structured approach to SDLC alignment by leveraging Git hooks and freeze policies to automate control over environments, making collaboration smoother and reducing human error.`,
  }},
  "git-hook-governance": {{
    title: "Branch Governance Using Git Hooks: The COMMUS Approach",
    content: `Git-based projects often suffer from uncontrolled branch pushes, hotfix chaos, or test overlaps. COMMUS implements a pre-receive hook mechanism that integrates with CI/CD systems to freeze or unfreeze environments based on rules, giving teams complete governance over their delivery flow.`,
  }},
}};

export default function BlogPost() {{
  const router = useRouter();
  const {{ slug }} = router.query;
  const post = postMap[slug];

  if (!post) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">{{post.title}}</h1>
      <p className="text-gray-700 whitespace-pre-line">{{post.content}}</p>
    </div>
  );
}}