import Image from "next/image";
import BlogImagePlaceholder from "@/app/components/blogs/BlogImagePlaceholder";
import { isAuthed } from "@/app/lib/adminAuth";
import { getBlogsData } from "@/app/lib/blogsStore";
import {
  loginAction,
  logoutAction,
  createBlogAction,
  deleteBlogAction,
} from "./actions";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

export const metadata = {
  robots: { index: false, follow: false },
};

function LoginForm({ error }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl ring-1 ring-gray-200/60 dark:ring-gray-800/60 p-8">
        <h1 className="font-primary text-2xl font-bold text-gray-900 dark:text-white mb-1">
          Blog Admin
        </h1>
        <p className="font-primary text-sm text-gray-500 dark:text-gray-400 mb-6">
          Sign in to manage blog posts.
        </p>

        {error && (
          <p className="mb-4 text-sm font-primary text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/40 rounded-md px-3 py-2">
            {error === "invalid"
              ? "Invalid email or password."
              : "Something went wrong. Please try again."}
          </p>
        )}

        <form action={loginAction} className="space-y-4">
          <div>
            <label className="block text-sm font-primary font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm font-primary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-primary font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm font-primary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary-500 hover:bg-primary-600 text-white font-primary font-semibold py-2.5 transition-colors cursor-pointer"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}

function Dashboard({ posts }) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-primary text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Blog Dashboard
            </h1>
            <p className="font-primary text-sm text-gray-500 dark:text-gray-400">
              Write a new post or manage existing ones.
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-sm font-primary font-semibold text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
            >
              Log out
            </button>
          </form>
        </div>

        {/* New post form */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg ring-1 ring-gray-200/60 dark:ring-gray-800/60 p-6 sm:p-8 mb-10">
          <h2 className="font-primary text-lg font-bold text-gray-900 dark:text-white mb-5">
            Write a new blog post
          </h2>
          <form action={createBlogAction} className="space-y-5">
            <div>
              <label className="block text-sm font-primary font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm font-primary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Blog title"
              />
            </div>

            <div>
              <label className="block text-sm font-primary font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tags <span className="text-gray-400">(comma separated)</span>
              </label>
              <input
                type="text"
                name="tags"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm font-primary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="React, Node.js, MERN Stack"
              />
            </div>

            <div>
              <label className="block text-sm font-primary font-medium text-gray-700 dark:text-gray-300 mb-1">
                Cover image <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="w-full text-sm font-primary text-gray-700 dark:text-gray-300 file:mr-4 file:rounded-md file:border-0 file:bg-primary-50 dark:file:bg-primary-900/30 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-700 dark:file:text-primary-300 hover:file:bg-primary-100 dark:hover:file:bg-primary-900/50"
              />
            </div>

            <div>
              <label className="block text-sm font-primary font-medium text-gray-700 dark:text-gray-300 mb-1">
                Content <span className="text-gray-400">(markdown supported)</span>
              </label>
              <textarea
                name="description"
                required
                rows={12}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm font-primary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono"
                placeholder="Write your blog post here using markdown..."
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-primary-500 hover:bg-primary-600 text-white font-primary font-semibold px-6 py-2.5 transition-colors cursor-pointer"
            >
              Publish post
            </button>
          </form>
        </section>

        {/* Existing posts */}
        <section>
          <h2 className="font-primary text-lg font-bold text-gray-900 dark:text-white mb-4">
            Published posts ({posts.length})
          </h2>
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center gap-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm ring-1 ring-gray-200/60 dark:ring-gray-800/60 p-4"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                  {post.blog_image?.url ? (
                    <Image
                      src={post.blog_image.url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <BlogImagePlaceholder title={post.title} textClassName="text-xl" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-primary font-semibold text-sm text-gray-900 dark:text-white truncate">
                    {post.title}
                  </p>
                  <p className="font-primary text-xs text-gray-500 dark:text-gray-400">
                    {post.date_of_post}
                  </p>
                </div>
                <DeleteButton slug={post.slug} action={deleteBlogAction} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default async function AdminBlogPage({ searchParams }) {
  const sp = await searchParams;
  const authed = await isAuthed();

  if (!authed) {
    return <LoginForm error={sp?.error} />;
  }

  const { data } = getBlogsData();
  const posts = [...data].sort(
    (a, b) => new Date(b.date_of_post) - new Date(a.date_of_post)
  );

  return <Dashboard posts={posts} />;
}
