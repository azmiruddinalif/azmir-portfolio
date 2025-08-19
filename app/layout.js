import {Inter} from "next/font/google";
import "./globals.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import "swiper/css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
