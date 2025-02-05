"use client";
import React, { useState } from "react";

const Chatbot = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOutputGenerated, setIsOutputGenerated] = useState(false);
  const [hoveredStandard, setHoveredStandard] = useState(null);

  const handleStandardHover = (standard) => {
    setHoveredStandard(standard);
  };

  const standards = {
    GRI: {
      prompt:
        "Using the provided data, generate a GRI compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
      logoSrc: "images/sustain360/gri-chat.svg",
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
    formData.append("standardPrompt", prompt[selectedStandard]);
    formData.append("selectedStandard", selectedStandard);
  };

  const handleStandardClick = (standard) => {
    setOutput("");
    setIsOutputGenerated(false);
    setLoading(false);
    setSelectedStandard(standard);
  };

  return (
    <>
      <title>Sustain360</title>
      <div className="flex flex-col md:flex-row min-h-screen bg-[#F1F1F1] p-8 gap-4">
        {/* Left Side */}
        <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
          <div className="flex justify-center">
            <img
              src="/images/sustain360/sustain360.svg"
              alt="Sustain360 Logo"
              className="w-32 md:w-40"
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
          <p className="text-lg md:text-xl flex justify-center items-center font-bold">
            Select Standard
          </p>
          <div className="w-full md:w-[50%] mx-auto flex flex-col gap-4">
            {Object.keys(standards).map((standard) => (
              <button
                key={standard}
                className={`p-2 shadow-lg py-8 md:py-10 text-lg md:text-xl font-bold rounded border flex items-center justify-center transition-all duration-300 relative ${
                  selectedStandard === standard
                    ? "bg-gray-200 text-green-900"
                    : "bg-white text-green-900"
                }`}
                onClick={() => setSelectedStandard(standard)}
                onMouseEnter={() => handleStandardHover(standard)}
                onMouseLeave={() => setHoveredStandard(null)}
              >
                <span
                  className={`transition-all duration-300 absolute ${
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
                    className="w-12 md:w-16 h-12 md:h-16 absolute right-4 transition-all duration-300"
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={handleFileUpload}
            className="bg-green-900 w-full md:w-[70%] mx-auto mt-6 text-white text-lg md:text-xl font-bold py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
          <div className="border border-green-300 p-4 bg-green-50 rounded">
            {loading ? (
              <div className="animate-spin h-8 md:h-10 w-8 md:w-10 border-t-4 border-green-700 rounded-full mx-auto"></div>
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: output || "Your output will appear here.",
                }}
              ></div>
            )}
          </div>
          {isOutputGenerated && (
            <button
              onClick={handleDownload}
              className="bg-green-700 text-white py-2 rounded w-full md:w-auto hover:bg-green-600 transition"
            >
              Download PDF
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Chatbot;
