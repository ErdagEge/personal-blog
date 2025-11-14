// app/posts/[slug]/page.tsx
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

type PostPageProps = {
  // In Next 16, params is a Promise-like object
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage(props: PostPageProps) {
  // Await the params first (this is what the error message wants)
  const { slug } = await props.params;

  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-4">
      <div className="space-y-2">
        <p className="text-xs text-slate-400">
          <Link href="/" className="underline underline-offset-2">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <p className="text-sm text-slate-400">
          Published {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
