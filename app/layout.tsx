// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Personal blog built with Next.js & Prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <header className="flex items-center justify-between mb-8">
            <Link href="/" className="text-2xl font-bold">
              My Blog
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/">Home</Link>
              {/* more links later (e.g. /categories, /about) */}
            </nav>
          </header>

          <main>{children}</main>

          <footer className="mt-12 border-t border-slate-800 pt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} My Blog
          </footer>
        </div>
      </body>
    </html>
  );
}
