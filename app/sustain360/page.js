"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic imports for client-side only libraries
const Html2pdf = dynamic(() => import("html2pdf.js"), { ssr: false });
const Marked = dynamic(() => import("marked").then(mod => mod.marked), { ssr: false });

const Sustain360 = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOutputGenerated, setIsOutputGenerated] = useState(false);
  const [hoveredStandard, setHoveredStandard] = useState(null);
  const [showWaitlist, setShowWaitlist] = useState(true);

  const standards = {
    GRI: {
      prompt:
        "Using the provided data, generate a GRI compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
      logoSrc: "/images/sustain360/gri-chat.svg",
    },
    BRSR: {
      prompt:
        "Using the provided data, generate a BRSR compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
      logoSrc: "/images/sustain360/brsr-chat.svg",
    },
    SASB: {
      prompt:
        "Using the provided data, generate a SASB compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
      logoSrc: "/images/sustain360/sasb-chat.svg",
    },
  };

  const handleFileUpload = async () => {
    if (!pdfFile || !selectedStandard) {
      setOutput("Please upload a PDF file then select a standard.");
      return;
    }

    const formData = new FormData();
    formData.append("file", pdfFile);
    formData.append("standardPrompt", standards[selectedStandard].prompt);
    formData.append("selectedStandard", selectedStandard);

    setLoading(true);
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3001/upload",
    //     formData
    //   );
    //   setOutput(formatOutput(response.data.reply));
    //   setIsOutputGenerated(true);
    // } catch (error) {
    //   setOutput("Error processing the request. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleDownload = () => {
    if (!output) {
      alert("No output to download.");
      return;
    }

    import("html2pdf.js").then((html2pdfModule) => {
      const html2pdf = html2pdfModule.default || html2pdfModule;
      
      const options = {
        margin: 10,
        filename: "generated_report.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().from(output).set(options).save();
    }).catch(err => {
      console.error("Error loading html2pdf:", err);
      alert("Error generating PDF. Please try again.");
    });
  };

  const handleJoinWaitlist = () => {
    window.location.href = "https://forms.gle/1jjqzyGdBzMFxikU7";
  };

  const formatOutput = (outputText) => {
    // Only use marked in the browser
    if (typeof window !== 'undefined' && Marked) {
      return `<div class='text-left'>${Marked(outputText)}</div>`;
    }
    return `<div class='text-left'>${outputText}</div>`;
  };

  return (
    <>
      <title>Sustain360</title>
      
      {/* Wrapper with position relative to contain the absolute positioned overlay */}
      <div className="relative min-h-screen">
        {/* The actual content (only this gets blurred) */}
        <div className={`${showWaitlist ? "blur-md pointer-events-none" : ""} transition-all duration-300`}>
          <div className="flex flex-col md:flex-row bg-gray-100 p-4 md:p-8 gap-4">
            {/* Left Section (Fixed, Stays in Place) */}
            <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 md:sticky top-0 ">
              <div className="flex justify-center">
                <img
                  src="/images/sustain360/sustain360.svg"
                  alt="Sustain360 Logo"
                  className="w-24 md:w-32 lg:w-40"
                />
              </div>
              <label className="text-lg md:text-2xl font-bold text-center">
                Upload PDF Document
              </label>
              <input
                type="file"
                onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
                className="border border-green-300 p-2 rounded w-full"
              />
              <p className="text-lg md:text-xl font-bold text-center">
                Select Standard
              </p>
              <div className="w-full md:w-[70%] lg:w-[50%] mx-auto flex flex-col gap-4">
                {Object.keys(standards).map((standard) => (
                  <button
                    key={standard}
                    className={`p-2 shadow-lg py-6 md:py-8 lg:py-10 text-lg md:text-xl font-bold rounded border flex items-center justify-center relative transition-all duration-300 ${
                      selectedStandard === standard
                        ? "bg-gray-200 text-green-900"
                        : "bg-white text-green-900"
                    }`}
                    onClick={() => setSelectedStandard(standard)}
                    onMouseEnter={() => setHoveredStandard(standard)}
                    onMouseLeave={() => setHoveredStandard(null)}
                  >
                    <span
                      className={`absolute transition-all duration-300 ${
                        selectedStandard === standard ||
                        hoveredStandard === standard
                          ? "left-4"
                          : "left-1/2 transform -translate-x-1/2"
                      }`}
                    >
                      {standard}
                    </span>
                    {(selectedStandard === standard ||
                      hoveredStandard === standard) && (
                      <img
                        src={standards[standard].logoSrc}
                        alt="Logo"
                        className="w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 absolute right-4 transition-all duration-300"
                      />
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={handleFileUpload}
                className="bg-green-900 text-white mt-10 text-lg font-bold py-2 rounded w-full hover:bg-green-700 transition"
              >
                Submit
              </button>
            </div>

            {/* Right Section (Scrollable) */}
            <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 overflow-y-auto max-h-screen">
              <div className="border border-green-300 p-4 bg-green-50 rounded">
                {loading ? (
                  <div className="animate-spin h-8 w-8 border-t-4 border-green-700 rounded-full mx-auto"></div>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: output || "Your output will appear here.",
                    }}
                  />
                )}
              </div>
              {isOutputGenerated && (
                <button
                  onClick={handleDownload}
                  className="bg-green-700 text-white py-2 rounded w-full hover:bg-green-600 transition"
                >
                  Download PDF
                </button>
              )}
            </div>
          </div>
          <div className="container content-item mx-auto px-6 py-10">
            <div className="flex flex-col items-center bg-gradient-to-r from-[#003F31] to-[#20732C] p-12 rounded-3xl shadow-xl relative overflow-hidden">
              <h2 className="text-4xl font-bold text-white mb-6 text-center">
                Get In Touch With Us
              </h2>
              <p className="text-xl text-white mb-8 text-center max-w-lg">
                Have any questions or need assistance? Our team is here to help you
                take the next step in your sustainability journey.
              </p>
              <Link
                href="/contact"
                className=" bg-white text-[#003F31] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 z-10 transition-all ease-in-out duration-300"
              >
                Contact Us
              </Link>

              {/* Decorative Wave effect */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-white opacity-30 rounded-t-full"></div>
            </div>
          </div>
        </div>

        {/* Waitlist overlay - positioned absolute within the relative container */}
        {showWaitlist && (
          <div className="absolute inset-0 flex items-center justify-center z-40">
            <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md text-center pointer-events-auto">
              <h2 className="text-3xl font-bold text-green-900 mb-4">Coming Soon!</h2>
              <p className="text-lg mb-6">
                Sustain360 is currently in development. Join our waitlist to be notified when we launch.
              </p>
              <button
                onClick={handleJoinWaitlist}
                className="bg-green-900 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sustain360;