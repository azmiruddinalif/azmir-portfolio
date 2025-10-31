"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../../common/container";

export default function ProcessContent({ process }) {
  return (
    <div className="relative pb-24">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/30 pointer-events-none" />

      <Container>
        <div className="relative">
          {/* Content card with subtle elevation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl shadow-gray-200/50 dark:shadow-gray-950/50 border border-gray-200/50 dark:border-gray-800/50"
          >
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="
                relative z-10 dark:text-white/80
                prose prose-base sm:prose-lg md:prose-xl lg:prose-2xl max-w-none 
                dark:prose-invert
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-20
                prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-headings:transition-colors prose-headings:duration-300
                prose-h1:text-4xl sm:prose-h1:text-5xl prose-h1:mb-8 prose-h1:leading-tight
                prose-h1:bg-gradient-to-r prose-h1:from-primary-600 prose-h1:to-blue-600 
                prose-h1:dark:from-primary-400 prose-h1:dark:to-blue-400
                prose-h1:bg-clip-text prose-h1:text-transparent
                prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
                prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-primary-200 
                dark:prose-h2:border-primary-800
                prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-h3:text-primary-700 dark:prose-h3:text-primary-300
                prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-p:leading-relaxed prose-p:my-6 prose-p:text-base sm:prose-p:text-lg
                prose-strong:text-primary-600 dark:prose-strong:text-primary-400
                prose-strong:font-semibold prose-strong:px-1
                prose-a:text-primary-600 dark:prose-a:text-primary-400
                prose-a:no-underline prose-a:font-medium prose-a:transition-all
                prose-a:border-b-2 prose-a:border-transparent
                hover:prose-a:border-primary-400 hover:prose-a:text-primary-700
                dark:hover:prose-a:text-primary-300
                prose-ul:my-6 prose-ul:space-y-2 
                prose-li:my-3 prose-li:text-gray-700 dark:prose-li:text-gray-300
                prose-li:marker:text-primary-500
                prose-ol:my-6 prose-ol:space-y-2
                prose-code:text-primary-600 dark:prose-code:text-primary-400
                prose-code:bg-primary-50/80 dark:prose-code:bg-primary-950/50
                prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-medium
                prose-code:border prose-code:border-primary-200/50 
                dark:prose-code:border-primary-800/50
                prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950
                prose-pre:border prose-pre:border-gray-700 prose-pre:shadow-xl
                prose-blockquote:border-l-4 prose-blockquote:border-primary-500
                prose-blockquote:bg-primary-50/50 dark:prose-blockquote:bg-primary-950/30
                prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-blockquote:italic prose-blockquote:text-gray-700 
                dark:prose-blockquote:text-gray-300
                prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-8
                transition-all duration-300
              "
              dangerouslySetInnerHTML={{ __html: process.longDesc }}
            />
          </motion.div>

          {/* Back Button - More prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-md bg-gradient-to-r from-primary-500 via-primary-500 to-primary-600 text-white font-semibold hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <span className="relative">Back to All Steps</span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
