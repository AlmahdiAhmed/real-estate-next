import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real estate",
  description: "Get your dream property",
  icon: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
