import localFont from "next/font/local";
import "./globals.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

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
  title: "Azmir - Software Developer",
  description:
    "MERN Stack Developer | Full Stack JavaScript Engineer | React Native | Next JS | Nest JS | Web & Mobile Application Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          id="chatway"
          async
          src="https://cdn.chatway.app/widget.js?id=9PJUig2t0HHe"
        ></script>
      </head>
      <body className={`${avenir.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
