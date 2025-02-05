"use client";

import { useState, useCallback, useMemo } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Newspaper,
  Info,
  Briefcase as WorkIcon,
  TreePalmIcon,
} from "lucide-react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

const scrollToServicesDesktop = () => {
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    servicesSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  } else {
    window.location.href = "/services";
  }
};
const scrollToServicesMobile = () => {
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    servicesSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  } else {
    window.location.href = "/services";
  }
};
export default function Navbar({ currentPath }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  // Memoize the active class based on currentPath
  const activeClass = useMemo(
    () => (path) => currentPath === path ? "font-bold scale-110" : "",
    [currentPath]
  );

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default navigation behavior
    router.push("/"); // Navigate to the home page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <header className="bg-[#F1F1F1] shadow-sm">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        {!isSidebarOpen && (
          <div className="flex items-center">
            <Link href="/">
              <Image
                alt="NatureMarks Logo"
                src="/images/nms-logo-navbar.png"
                width={50}
                height={50}
              />
            </Link>
          </div>
        )}

        {/* Navbar */}
        <nav className="hidden navbar-md:flex ml-24 font-medium text-xl space-x-10 text-[#102F17]">
          <Link
            href="/"
            onClick={handleHomeClick} // Handle home click for navigation and scroll
            className={`hover:font-bold hover:scale-110 transition-all ${activeClass(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              scrollToServicesDesktop();
            }}
            className={`hover:font-bold hover:scale-110 transition-all ${activeClass(
              "/services"
            )}`}
          >
            Services
          </Link>
          <a
            href="#"
            className="hover:font-bold hover:scale-110 transition-all"
          >
            News & Blogs
          </a>
          <Link
            href="/about"
            className={`hover:font-bold hover:scale-110 transition-all ${activeClass(
              "/about"
            )}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`hover:font-bold hover:scale-110 transition-all ${activeClass(
              "/contact"
            )}`}
          >
            Contact
          </Link>
          <Link
            href="/sustain360"
            className={`font-bold text-red-500 flex items-start gap-1 ${activeClass(
              "/sustain360"
            )}`}
          >
            Sustain360
            <motion.span
              className="text-xs text-white bg-red-500 px-1.5 py-0.5 rounded-md font-semibold"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
            >
              Beta
            </motion.span>
          </Link>
        </nav>

        {/* Work With Us Button */}
        {!isSidebarOpen && (
          <div className="hidden navbar-md:flex items-center space-x-4">
            <Button className="bg-orange-900 font-medium text-xl text-white hover:bg-white hover:text-orange-500 transition duration-300">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="navbar-md:hidden text-xl text-[#102F17]"
          >
            ☰
          </button>
        )}
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <motion.div
          className="fixed inset-0 bg-white bg-opacity-0 z-10 navbar-md:hidden"
          onClick={closeSidebar}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="fixed right-0 top-0 bottom-0 w-[70%] bg-white p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <Image
                alt="NatureMarks Logo"
                src="/images/nms-logo-navbar.png"
                width={50}
                height={50}
              />
              <button onClick={closeSidebar} className="text-xl text-[#102F17]">
                <FaTimes />
              </button>
            </div>

            <hr className="my-4" />

            <div className="space-y-6">
              <Link
                href="/"
                onClick={handleHomeClick} // Handle home click for navigation and scroll
                className={`flex items-center text-xl ${
                  activeClass("/")
                    ? "text-orange-600 font-bold"
                    : "text-[#102F17]"
                }`}
              >
                <Home className="mr-2" /> Home
              </Link>
              <Link
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToServicesMobile();
                }}
                className={`flex items-center text-xl ${
                  activeClass("/services")
                    ? "text-orange-600 font-bold"
                    : "text-[#102F17]"
                }`}
              >
                <Briefcase className="mr-2" /> Services
              </Link>
              <a
                href="#"
                className="flex items-center text-xl text-[#102F17] hover:text-orange-600"
              >
                <Newspaper className="mr-2" /> News & Blogs
              </a>
              <Link
                href="/about"
                className={`flex items-center text-xl ${
                  activeClass("/about")
                    ? "text-orange-600 font-bold"
                    : "text-[#102F17]"
                }`}
              >
                <Info className="mr-2" /> About
              </Link>
              <Link
                href="/contact"
                className={`flex items-center text-xl ${
                  activeClass("/contact")
                    ? "text-orange-600 font-bold"
                    : "text-[#102F17]"
                }`}
              >
                <WorkIcon className="mr-2" /> Contact
              </Link>
              <Link
                href="/sustain360"
                className={`flex items-center text-xl ${
                  activeClass("/sustain360")
                    ? "text-orange-600 font-bold"
                    : "text-[#102F17]"
                }`}
              >
                <TreePalmIcon className="mr-2" /> Sustain360
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
