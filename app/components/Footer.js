"use client";

import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

export default function Footer() {
  const router = useRouter();

  const handleHomeClick = (e) => {
    e.preventDefault();
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#E5E5E5] w-full py-8 px-8 md:px-16 text-center md:text-left">
      <div className="w-full mx-auto flex flex-col items-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-[#102F17] text-lg mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 list-none p-0">
              <li className="hover:text-green-600 transition-colors">
                <a href="/" onClick={handleHomeClick}>
                  Home
                </a>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToServicesDesktop();
                  }}
                >
                  Services
                </a>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <Link href="/contact">Connect With Us</Link>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-[#102F17] text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2 list-none p-0">
              <li className="hover:text-green-600 transition-colors">
                <Link href="/services/esg-reporting">ESG Reporting</Link>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <Link href="/services/ghg-reporting">GHG Reporting</Link>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <Link href="/services/carbon-credit">Carbon Credit</Link>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <Link
                  href="/sustain360"
                  className="font-bold text-red-500 flex items-center gap-1 justify-center md:justify-start"
                >
                  Sustain360
                  <motion.span
                    className="text-xs text-white bg-red-500 -mt-2 px-2 py-0.5 rounded-md font-semibold"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                  >
                    Beta
                  </motion.span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-[#102F17] text-lg mb-4">Legal</h3>
            <ul className="space-y-2 list-none p-0">
              <li className="hover:text-green-600 transition-colors">
                <Link href="/legal/terms-of-service">Term Of Services</Link>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <Link href="/legal/privacy-policy">Privacy Policy</Link>
              </li>
              {/* <li className="hover:text-green-600 transition-colors">
                <Link href="/licensed-regulation">Licensed & Regulation</Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-[#102F17] text-lg mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <p>+91 9833363372</p>
              <p>naturemarksystems@gmail.com</p>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <Link
                  href="https://www.instagram.com/naturemarksystems/#"
                  className="hover:text-green-600"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link href="http://linkedin.com/company/nature-mark-sys" className="hover:text-green-600">
                  <FaLinkedinIn size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-600 text-sm">
            © 2025 All Rights Reserved.
          </p>
          {/* <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-green-600"
            >
              Term Of Service
            </Link>
            <Link
              href="/policy"
              className="text-sm text-gray-600 hover:text-green-600"
            >
              Policy Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}