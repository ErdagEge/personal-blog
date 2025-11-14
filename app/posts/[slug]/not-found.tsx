// app/posts/[slug]/not-found.tsx
import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Post not found</h1>
      <p className="text-slate-300">The article you are looking for does not exist.</p>
      <Link href="/" className="text-sm underline underline-offset-2">
        Go back home
      </Link>
    </div>
  );
}
