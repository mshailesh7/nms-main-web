"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Track the current pathname
  const [hasLoaded, setHasLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position on route change
    setHasLoaded(true);

    // Scroll progress handler
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = "/nms-logo-navbar.ico"; // Set the favicon path
      document.head.appendChild(newLink);
    } else {
      link.href = "/nms-logo-navbar.ico"; // Update if it already exists
    }
  }, []);
  

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F1F1F1] flex flex-col scroll-smooth">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200">
          <motion.div
            className="h-full bg-green-900"
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-40 shadow-sm">
          <div className="h-[60px] md:h-[70px] w-full">
            <Navbar currentPath={pathname} /> {/* Pass current path */}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <div
            className={`transition-opacity duration-500 ${
              hasLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
