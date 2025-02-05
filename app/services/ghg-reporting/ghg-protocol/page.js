"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function GHGProtocol() {
  const overviewRef = useRef(null);
  const keyBenefitsRef = useRef(null);
  const servicesRef = useRef(null);
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (ref, section) => {
    setActiveSection(section);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const sections = [
    {
      id: "overview",
      label: "OVERVIEW",
      ref: overviewRef,
      icon: "/images/overview-icon.svg",
      content:
        "The GHG Protocol is the most widely used international accounting tool for government and business leaders to understand, quantify, and manage greenhouse gas emissions. It provides standards and guidance for companies and cities to measure, manage, and report their carbon footprints.",
    },
    {
      id: "keyBenefits",
      label: "KEY BENEFITS",
      ref: keyBenefitsRef,
      icon: "/images/key-benefits-icon.svg",
      content: (
        <ul className="list-disc pl-6 mb-4">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      ),
    },
    {
      id: "services",
      label: "OUR SERVICES",
      ref: servicesRef,
      icon: "/images/services-icon.svg",
      content: (
        <ul className="list-disc pl-6 mb-4">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <title>GHG-Protocol</title>
      <div className="flex flex-col py-10 items-center justify-center min-h-screen px-6 md:px-10">
        <div className="w-full max-w-7xl bg-white p-6 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row">
          {/* Left Section: Navigation Buttons */}
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-3xl md:text-4xl font-bold text-[#102F17]">
              GHG Protocol
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-[#102F17] mt-4">
              (Greenhouse Gas Protocol)
            </h2>
            <p className="text-base md:text-xl font-medium text-[#102F17] mt-6">
              GHG REPORTING
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.ref, section.id)}
                  className={`px-4 py-2 md:px-6 md:py-3 ${
                    activeSection === section.id ? "bg-[#B0C4B1]" : "bg-white"
                  } text-[#102F17] font-bold rounded-lg border border-green-900 transition`}
                >
                  {section.label}
                </button>
              ))}
              <Link
                href="/contact"
                className=" bg-orange-900 px-4 py-2 md:px-6 md:py-3 text-white font-bold rounded-lg border border-green-900 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Section: Horizontal Scrollable Content */}
          <div className="flex-1 mt-10 md:mt-0 flex space-x-6 md:space-x-8 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                ref={section.ref}
                className="flex-none w-full md:w-2/3 bg-[#B0C4B1] p-6 md:pb-44 rounded-lg shadow-md"
                style={{ maxHeight: "450px" }}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: activeSection === section.id ? 1 : 0.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col mb-6">
                  <img
                    src={section.icon}
                    alt={`${section.label} icon`}
                    className="w-12 h-12 md:w-16 md:h-16 mb-4"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-[#102F17]">
                    {section.label}
                  </h3>
                </div>
                <div className="text-[#102F17] font-medium text-sm md:text-lg leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
