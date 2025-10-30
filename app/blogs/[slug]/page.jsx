import Image from "next/image";
import { marked } from "marked";
import hljs from "highlight.js";

// Import highlight themes for both light and dark mode
import "highlight.js/styles/github.css"; // Light mode
import "highlight.js/styles/github-dark.css"; // Dark mode

// ✅ Fetch blog data from Strapi
async function getBlog(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch blog");
  const data = await res.json();
  return data?.data?.[0] || null;
}

export default async function SingleBlog({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="text-center px-4">
          <div className="inline-block p-4 rounded-full bg-orange-100 dark:bg-orange-900/20 mb-4">
            <svg
              className="w-16 h-16 text-orange-600 dark:text-orange-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Blog not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The article you're looking for doesn't exist.
          </p>
        </div>
      </main>
    );
  }

  const data = blog.attributes || blog;
  const { title, blog_description, blog_image, date_of_post, tags } = data;

  const imageUrl =
    blog_image?.data?.attributes?.url ||
    blog_image?.url ||
    blog_image?.formats?.large?.url ||
    blog_image?.formats?.medium?.url ||
    null;

  // ✅ Fix wrong link format like [https://github.com](link)
  const fixedMarkdown = (blog_description || "").replace(
    /\[https:\/\/([^\]]+)\]\(link\)/g,
    (_, url) => `[${url}](https://${url})`
  );

  // ✅ Configure Markdown renderer with syntax highlighting
  marked.setOptions({
    highlight(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
  });

  // ✅ Convert Markdown → HTML safely
  const htmlContent = marked.parse(fixedMarkdown);

  return (
    <main className="min-h-screen ">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 dark:bg-orange-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-14 lg:mt-20">
        {/* ✅ Blog Banner with enhanced styling */}
        {imageUrl && (
          <div className="relative w-full mb-8 sm:mb-12 group">
            <div className="relative w-full h-64 sm:h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={imageUrl}
                alt={title || "Blog image"}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
                priority
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        )}

        {/* ✅ Content Container with card design */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-xl ring-1 ring-gray-200/50 dark:ring-gray-800/50 p-6 sm:p-8 lg:p-12">
          {/* ✅ Tags at top */}
          {tags?.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-6">
              {tags.map((tag, index) => (
                <span
                  key={tag.id || index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-600 to-gray-400 text-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {tag.tag || tag.attributes?.tag}
                </span>
              ))}
            </div>
          )}

          {/* ✅ Title with gradient */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-tight">
            {title}
          </h1>

          {/* ✅ Date with icon */}
          {date_of_post && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time dateTime={date_of_post}>
                {new Date(date_of_post).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          )}

          {/* ✅ Markdown Content with enhanced styling */}
          <article
            className="
              prose prose-base sm:prose-lg lg:prose-xl max-w-none 
              text-gray-800 dark:text-gray-200 dark:prose-invert
              transition-all duration-300
              

              [&_h1]:text-2xl sm:[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-10 [&_h1]:mb-4
              [&_h1]:bg-gradient-to-r [&_h1]:from-primary-600 [&_h1]:to-secondary-600 
              [&_h1]:bg-clip-text [&_h1]:text-transparent

              [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
              [&_h2]:text-gray-900 dark:[&_h2]:text-white
              [&_h2]:pb-2 [&_h2]:border-b-2 [&_h2]:border-orange-200 dark:[&_h2]:border-orange-900

              [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
              [&_h3]:text-gray-800 dark:[&_h3]:text-gray-100

              [&_p]:text-gray-700 dark:[&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-5
              [&_p]:text-base sm:[&_p]:text-lg

              [&_ul]:list-none [&_ul]:mb-6 [&_ul]:space-y-2
              [&_li]:relative [&_li]:pl-6 
              [&_li]:before:content-['→'] [&_li]:before:absolute [&_li]:before:left-0 
              [&_li]:before:text-orange-500 dark:[&_li]:before:text-orange-400 [&_li]:before:font-bold

              [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-6 [&_ol]:space-y-2

              [&_blockquote]:border-l-4 [&_blockquote]:border-orange-500 dark:[&_blockquote]:border-orange-400
              [&_blockquote]:bg-orange-50 dark:[&_blockquote]:bg-orange-900/10
              [&_blockquote]:pl-6 [&_blockquote]:pr-4 [&_blockquote]:py-4 [&_blockquote]:italic 
              [&_blockquote]:text-gray-700 dark:[&_blockquote]:text-gray-300 [&_blockquote]:my-8
              [&_blockquote]:rounded-r-lg [&_blockquote]:shadow-sm

              [&_a]:text-orange-600 dark:[&_a]:text-orange-400 [&_a]:font-medium
              [&_a]:no-underline [&_a]:border-b-2 [&_a]:border-orange-200 dark:[&_a]:border-orange-800
              hover:[&_a]:border-orange-500 dark:hover:[&_a]:border-orange-400
              [&_a]:transition-colors [&_a]:duration-200 [&_a]:break-words

              [&_img]:rounded-xl [&_img]:my-8 [&_img]:mx-auto [&_img]:object-cover 
              [&_img]:max-h-[500px] [&_img]:shadow-lg [&_img]:ring-1 
              [&_img]:ring-gray-200 dark:[&_img]:ring-gray-800

              [&_pre]:bg-gradient-to-br [&_pre]:from-gray-50 [&_pre]:to-gray-100 
              dark:[&_pre]:from-gray-950 dark:[&_pre]:to-gray-900
              [&_pre]:text-sm sm:[&_pre]:text-base 
              [&_pre]:p-5 sm:[&_pre]:p-6 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-8
              [&_pre]:shadow-lg [&_pre]:ring-1 [&_pre]:ring-gray-200 dark:[&_pre]:ring-gray-800
              [&_pre]:border-l-4 [&_pre]:border-orange-500

              [&_code]:font-mono [&_code]:text-sm
              [&_:not(pre)_code]:px-2 [&_:not(pre)_code]:py-1 [&_:not(pre)_code]:rounded-md
              [&_:not(pre)_code]:bg-orange-100 dark:[&_:not(pre)_code]:bg-orange-900/20
              [&_:not(pre)_code]:text-orange-700 dark:[&_:not(pre)_code]:text-orange-300
              [&_:not(pre)_code]:font-semibold [&_:not(pre)_code]:ring-1 
              [&_:not(pre)_code]:ring-orange-200 dark:[&_:not(pre)_code]:ring-orange-800

              [&_table]:w-full [&_table]:my-8 [&_table]:rounded-lg [&_table]:overflow-hidden
              [&_table]:shadow-lg [&_table]:ring-1 [&_table]:ring-gray-200 dark:[&_table]:ring-gray-800
              [&_th]:bg-orange-100 dark:[&_th]:bg-orange-900/20 [&_th]:p-3 [&_th]:font-semibold
              [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-200 dark:[&_td]:border-gray-800

              [&_table]:block [&_table]:overflow-x-auto
              [&_table]:whitespace-nowrap [&_th]:min-w-[240px] [&_td]:min-w-[120px]
              &_table]:border-collapse [&_th]:text-left [&_td]:align-top 

              [&_hr]:my-12 [&_hr]:border-gray-200 dark:[&_hr]:border-gray-800
            "
            dangerouslySetInnerHTML={{
              __html: htmlContent,
            }}
          />
        </div>

        {/* ✅ Back to blogs button */}
        <div className="mt-12 text-center">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all blogs
          </a>
        </div>
      </div>
    </main>
  );
}
