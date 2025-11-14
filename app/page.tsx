import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Latest articles</h1>
        <p className="text-slate-300 text-sm mt-1">
          All articles are fetched from the database using Prisma.
        </p>
      </div>

      {posts.length === 0 && (
        <p className="text-slate-400">No posts yet. Create one in Prisma Studio.</p>
      )}

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border border-slate-800 rounded-lg p-4 hover:border-slate-600 transition"
          >
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            {post.excerpt && (
              <p className="text-slate-300 text-sm mt-1">{post.excerpt}</p>
            )}
            <p className="text-xs text-slate-500 mt-2">
              Published {post.publishedAt.toDateString?.() ?? ""}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
