"use client";

import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const scrollToServices = () => {
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

  return (
    <footer className="bg-[#E5E5E5] w-full py-8 px-8 md:px-16">
      {/* Footer Grid */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-center md:text-left">
        {/* Recently Posted Blogs Section */}
        <div className="lg:col-span-3 md:col-span-1">
          <h3 className="font-semibold text-[#102F17] text-lg mb-4">Recently Posted Blogs</h3>
          <div className="space-y-4">
            {[1, 2].map((index) => (
              <div key={index} className="flex gap-4 items-center justify-center md:justify-start">
                <img
                  src="/images/blog.png"
                  alt={`Blog ${index}`}
                  className="w-20 h-14 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium">Blog {index}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">Lorem ipsum dolor sit amet...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="lg:col-span-2 md:col-span-1">
          <h3 className="font-semibold text-[#102F17] text-lg mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li className="hover:text-green-600 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-green-600 transition-colors">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-green-600 transition-colors">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-green-600 transition-colors">
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="lg:col-span-2 md:col-span-1">
          <h3 className="font-semibold text-[#102F17] text-lg mb-4">Services</h3>
          <ul className="space-y-2">
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
              <Link href="/services/carbon-trading">Carbon Trading</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="lg:col-span-2 md:col-span-1">
          <h3 className="font-semibold text-[#102F17] text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li className="hover:text-green-600 transition-colors">
              <Link href="/terms-of-service">Term Of Services</Link>
            </li>
            <li className="hover:text-green-600 transition-colors">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-green-600 transition-colors">
              <Link href="/licensed-regulation">Licensed & Regulation</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="lg:col-span-2 md:col-span-1">
          <h3 className="font-semibold text-[#102F17] text-lg mb-4">Contact</h3>
          <div className="space-y-2">
            <p className="">+91 9833363372</p>
            <p className="">naturemarksystems@gmail.com</p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a href="#" className="hover:text-green-600">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-green-600">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-600 text-sm">© 2023 Te-Owo All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-green-600">
              Term Of Service
            </Link>
            <Link href="/policy" className="text-sm text-gray-600 hover:text-green-600">
              Policy Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
