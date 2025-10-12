import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import "swiper/css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://azmiruddin.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script
          id="chatway"
          async
          src="https://cdn.chatway.app/widget.js?id=9PJUig2t0HHe"
        ></script> */}
       <script id="linquo" async src="https://admin.linquo.app/widget.js?id=cbf75c11-59d8-4e98-a87c-119e8b90f2dd"></script>
      </head>
      <body className={`${inter.variable} antialiased dark:bg-gray-900`}>
        {/* Background Pattern - Responsive but maintains center positioning */}
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
          <div className="absolute left-1/2 top-0 ml-[-38rem] h-[30rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-700 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary-300/30 dark:via-primary-500/30 dark:to-primary-700/30 dark:opacity-100">
              <svg
                aria-hidden="true"
                className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
              >
                <defs>
                  <pattern
                    id="pattern-1609"
                    width={72}
                    height={56}
                    patternUnits="userSpaceOnUse"
                    x={-12}
                    y={4}
                  >
                    <path d="M.5 56V.5H72" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#pattern-1609)"
                />
                <svg x={-12} y={4} className="overflow-visible">
                  <rect
                    strokeWidth={0}
                    width={73}
                    height={57}
                    x={288}
                    y={168}
                  />
                  <rect strokeWidth={0} width={73} height={57} x={144} y={56} />
                  <rect
                    strokeWidth={0}
                    width={73}
                    height={57}
                    x={504}
                    y={168}
                  />
                  <rect
                    strokeWidth={0}
                    width={73}
                    height={57}
                    x={720}
                    y={336}
                  />
                </svg>
              </svg>
            </div>
          </div>
        </div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
