// import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "swiper/css";
import "./globals.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const avenir = localFont({
  src: [
    {
      path: "../public/fonts/AvenirNextLTProBold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/AvenirNextLTProRegular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/avenir-next-world-extrabold.otf",
      weight: "800",
    },
    {
      path: "../public/fonts/avenir-next-demi-bold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://azmiruddin.com"),
  openGraph: {
    images: [
      {
        url: "/og/azmir_og_learg.png",
        width: 1200,
        height: 630,
        alt: "Azmir Uddin Alif - MERN Stack & Full-Stack Developer",
      },
    ],
    siteName: "Azmir Uddin Alif",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azmir Uddin Alif - MERN Stack Developer",
    description: "MERN Stack & Full-Stack Developer building scalable web and mobile apps",
    images: ["/og/azmir_og_learg.png"],
    creator: "@azmiruddinalif",
  },
  other: {
    "msapplication-TileImage": "/og/azmir_og_learg.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Azmir Uddin Alif - MERN Stack & Full-Stack Developer",
    "og:image:type": "image/png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply saved theme before first paint to prevent a light/dark flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("darkMode");
                  var isDark = stored ? stored === "true" : window.matchMedia("(prefers-color-scheme: dark)").matches;
                  if (isDark) document.documentElement.classList.add("dark");
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "@id": "https://azmiruddin.com/#person",
                  "name": "Azmir Uddin Alif",
                  "url": "https://azmiruddin.com/",
                  "image": "https://azmiruddin.com/azmir-uddin-alif.jpg",
                  "jobTitle": "Full-Stack Developer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Craftlane"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/azmiruddinalif/",
                    "https://github.com/azmiruddin",
                    "https://twitter.com/azmiruddinalif"
                  ],
                  "knowsAbout": [
                    "MERN Stack",
                    "Next.js",
                    "React Native",
                    "Web Development",
                    "Software Development"
                    "Full-stack Development"
                  ],
                  "description": "MERN Stack & Full-Stack JavaScript Developer building scalable web and mobile apps for startups and enterprises."
                }
              `,
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "@id": "https://azmiruddin.com/#website",
                  "url": "https://azmiruddin.com/",
                  "name": "Azmir Uddin Alif Portfolio",
                  "publisher": {
                    "@id": "https://azmiruddin.com/#person"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://azmiruddin.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              `,
          }}
        />

        <script
          id="linquo"
          async
          src="https://admin.linquo.app/widget.js?id=e3d77fc7-5140-41d0-b3e1-9d58d68a185d"></script>
      </head>
      <body className={`${avenir.variable} ${geistSans.variable} antialiased dark:bg-gray-900`}>
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
          <div className="absolute left-1/2 top-0 ml-[-38rem] h-[30rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-700 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary-300/30 dark:via-primary-500/30 dark:to-primary-700/30 dark:opacity-100">
              <svg
                aria-hidden="true"
                className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5">
                <defs>
                  <pattern
                    id="pattern-1609"
                    width={72}
                    height={56}
                    patternUnits="userSpaceOnUse"
                    x={-12}
                    y={4}>
                    <path d="M.5 56V.5H72" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#pattern-1609)" />
                <svg x={-12} y={4} className="overflow-visible">
                  <rect strokeWidth={0} width={73} height={57} x={288} y={168} />
                  <rect strokeWidth={0} width={73} height={57} x={144} y={56} />
                  <rect strokeWidth={0} width={73} height={57} x={504} y={168} />
                  <rect strokeWidth={0} width={73} height={57} x={720} y={336} />
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
