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
      <main className="max-w-3xl mx-auto py-20 text-center text-gray-500 dark:text-gray-400">
        Blog not found.
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
    <main className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-14 lg:mt-20 transition-colors duration-300">
      {/* ✅ Blog Banner */}
      {imageUrl && (
        <div className="relative w-full h-64 sm:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || "Blog image"}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
            priority
          />
        </div>
      )}

      {/* ✅ Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-primary text-gray-900 dark:text-white leading-snug">
        {title}
      </h1>

      {/* ✅ Date */}
      {date_of_post && (
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
          {new Date(date_of_post).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      )}

      {/* ✅ Markdown Content */}
      <article
        className="
          prose prose-base sm:prose-lg lg:prose-xl max-w-none 
          text-gray-800 dark:text-gray-300 dark:prose-invert
          transition-all duration-300

          [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3
          [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2

          [&_p]:text-gray-700 dark:[&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-4
          [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4

          [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic 
          [&_blockquote]:text-gray-600 dark:[&_blockquote]:text-gray-400 [&_blockquote]:my-6

          [&_a]:text-orange-600 dark:[&_a]:text-orange-400 [&_a]:underline hover:[&_a]:opacity-80
          [&_a]:break-words [&_a]:target-blank [&_a]:no-underline

          [&_img]:rounded-lg [&_img]:my-6 [&_img]:mx-auto [&_img]:object-cover [&_img]:max-h-[400px]

          [&_pre]:bg-[#f6f8fa] dark:[&_pre]:bg-[#1e1e1e] [&_pre]:text-sm sm:[&_pre]:text-base 
          [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6

          [&_code]:font-mono [&_code]:px-1 [&_code]:rounded 
          [&_code]:bg-gray-100 dark:[&_code]:bg-white/10
        "
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
      />

      {/* ✅ Tags */}
      {tags?.length > 0 && (
        <div className="mt-10 flex gap-2 sm:gap-3 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-gray-100 dark:bg-white/10 px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium"
            >
              {tag.tag || tag.attributes?.tag}
            </span>
          ))}
        </div>
      )}
    </main>
  );
}
