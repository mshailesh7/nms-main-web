"use client";

import { useState, useCallback, useMemo } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Briefcase, Newspaper, Info, Briefcase as WorkIcon, TreePalmIcon } from "lucide-react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Smooth scroll function for desktop & mobile
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    window.location.href = "/services";
  }
};

export default function Navbar({ currentPath }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = useCallback(() => setIsSidebarOpen((prev) => !prev), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  // Determine active link styling
  const isActive = (path) => (currentPath === path ? "font-bold scale-110 text-[#102F17]" : "");

  // Handle home click with smooth scroll
  const handleHomeClick = (e) => {
    e.preventDefault();
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-[#F1F1F1] shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        {!isSidebarOpen && (
          <Link href="/">
            <Image
              alt="NatureMarks Logo"
              src="/images/nms-logo-navbar.png"
              width={50}
              height={50}
              priority
            />
          </Link>
        )}

        {/* Desktop Navbar */}
        <nav className="hidden md:flex font-medium text-xl space-x-8 text-[#102F17]">
          <Link href="/" onClick={handleHomeClick} className={`transition-all hover:font-bold hover:scale-110 ${isActive("/")}`}>
            Home
          </Link>
          <Link href="/services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }} className={`transition-all hover:font-bold hover:scale-110 ${isActive("/services")}`}>
            Services
          </Link>
          <a href="#" className="transition-all hover:font-bold hover:scale-110">
            News & Blogs
          </a>
          <Link href="/about" className={`transition-all hover:font-bold hover:scale-110 ${isActive("/about")}`}>
            About
          </Link>
          <Link href="/contact" className={`transition-all hover:font-bold hover:scale-110 ${isActive("/contact")}`}>
            Contact
          </Link>
          <Link href="/sustain360" className={`font-bold text-red-500 flex items-center gap-1 ${isActive("/sustain360")}`}>
            Sustain360
            <motion.span className="text-xs text-white bg-red-500 px-2 py-0.5 rounded-md font-semibold" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.1, repeat: Infinity }}>
              Beta
            </motion.span>
          </Link>
        </nav>

        {/* Work With Us Button */}
        {!isSidebarOpen && (
          <div className="hidden md:flex">
            <Button className="bg-orange-900 text-white font-medium text-lg hover:bg-white hover:text-orange-600 transition duration-300">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        {!isSidebarOpen && (
          <button onClick={toggleSidebar} className="md:hidden text-xl text-[#102F17]">
            ☰
          </button>
        )}
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <motion.div className="fixed inset-0  z-50 md:hidden" onClick={closeSidebar} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.3 }}>
          <div className="fixed right-0 top-0 bottom-0 w-[70%] bg-white p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center">
              <Image alt="NatureMarks Logo" src="/images/nms-logo-navbar.png" width={50} height={50} priority />
              <button onClick={closeSidebar} className="text-xl text-[#102F17]">
                <FaTimes />
              </button>
            </div>

            <hr className="my-4" />

            <div className="space-y-6">
              <Link href="/" onClick={handleHomeClick} className={`flex items-center text-lg ${isActive("/") ? "text-orange-600 font-bold" : "text-[#102F17]"}`}>
                <Home className="mr-2" /> Home
              </Link>
              <Link href="/services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }} className={`flex items-center text-lg ${isActive("/services") ? "text-orange-600 font-bold" : "text-[#102F17]"}`}>
                <Briefcase className="mr-2" /> Services
              </Link>
              <a href="#" className="flex items-center text-lg text-[#102F17] hover:text-orange-600">
                <Newspaper className="mr-2" /> News & Blogs
              </a>
              <Link href="/about" className={`flex items-center text-lg ${isActive("/about") ? "text-orange-600 font-bold" : "text-[#102F17]"}`}>
                <Info className="mr-2" /> About
              </Link>
              <Link href="/contact" className={`flex items-center text-lg ${isActive("/contact") ? "text-orange-600 font-bold" : "text-[#102F17]"}`}>
                <WorkIcon className="mr-2" /> Contact
              </Link>
              <Link href="/sustain360" className={`flex items-center text-lg ${isActive("/sustain360") ? "text-orange-600 font-bold" : "text-[#102F17]"}`}>
                <TreePalmIcon className="mr-2" /> Sustain360
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
