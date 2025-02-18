// // "use client";
// // import React, { useState } from "react";

// // const Chatbot = () => {
// //   const [pdfFile, setPdfFile] = useState(null);
// //   const [selectedStandard, setSelectedStandard] = useState("");
// //   const [output, setOutput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [isOutputGenerated, setIsOutputGenerated] = useState(false);
// //   const [hoveredStandard, setHoveredStandard] = useState(null);
// //   const [pdfUrl, setPdfUrl] = useState(null);

// //   const handleStandardHover = (standard) => {
// //     setHoveredStandard(standard);
// //   };

// //   const standards = {
// //     GRI: {
// //       prompt:
// //         "Using the provided data, generate a GRI compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
// //       logoSrc: "images/sustain360/gri-chat.svg",
// //     },
// //     BRSR: {
// //       prompt:
// //         "Using the provided data, generate a BRSR compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
// //       logoSrc: "/images/sustain360/brsr-chat.svg",
// //     },
// //     SASB: {
// //       prompt:
// //         "Using the provided data, generate a SASB compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
// //       logoSrc: "/images/sustain360/sasb-chat.svg",
// //     },
// //   };

// //   const handleFileUpload = async () => {
// //     if (!pdfFile || !selectedStandard) {
// //       setOutput("Please upload a PDF file then select a standard.");
// //       return;
// //     }

// //     setLoading(true);
// //     setOutput("");

// //     const formData = new FormData();
// //     formData.append("file", pdfFile);
// //     formData.append("standardPrompt", standards[selectedStandard].prompt);

// //     try {
// //       const response = await fetch("/api/upload", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       if (!response.ok) throw new Error("Failed to generate PDF.");

// //       const blob = await response.blob();
// //       const url = URL.createObjectURL(blob);
// //       setPdfUrl(url); // Store the URL for download

// //       setIsOutputGenerated(true);
// //     } catch (error) {
// //       setOutput("Error generating PDF.");
// //       console.error("Upload Error:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleDownload = () => {
// //     if (!pdfUrl) return;

// //     const link = document.createElement("a");
// //     link.href = pdfUrl;
// //     link.download = "ai-response.pdf";
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   const handleStandardClick = (standard) => {
// //     setOutput("");
// //     setIsOutputGenerated(false);
// //     setLoading(false);
// //     setSelectedStandard(standard);
// //   };

// //   return (
// //     <>
// //       <title>Sustain360</title>
// //       <div className="flex flex-col md:flex-row min-h-screen bg-[#F1F1F1] p-8 gap-4">
// //         {/* Left Side */}
// //         <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
// //           <div className="flex justify-center">
// //             <img
// //               src="/images/sustain360/sustain360.svg"
// //               alt="Sustain360 Logo"
// //               className="w-32 md:w-40"
// //             />
// //           </div>
// //           <label className="text-lg md:text-2xl font-bold text-center">
// //             Upload PDF Document
// //           </label>
// //           <input
// //             type="file"
// //             onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
// //             className="border border-green-300 p-2 rounded w-full"
// //           />
// //           <p className="text-lg md:text-xl flex justify-center items-center font-bold">
// //             Select Standard
// //           </p>
// //           <div className="w-full md:w-[50%] mx-auto flex flex-col gap-4">
// //             {Object.keys(standards).map((standard) => (
// //               <button
// //                 key={standard}
// //                 className={`p-2 shadow-lg py-8 md:py-10 text-lg md:text-xl font-bold rounded border flex items-center justify-center transition-all duration-300 relative ${
// //                   selectedStandard === standard
// //                     ? "bg-gray-200 text-green-900"
// //                     : "bg-white text-green-900"
// //                 }`}
// //                 onClick={() => setSelectedStandard(standard)}
// //                 onMouseEnter={() => handleStandardHover(standard)}
// //                 onMouseLeave={() => setHoveredStandard(null)}
// //               >
// //                 <span
// //                   className={`transition-all duration-300 absolute ${
// //                     selectedStandard === standard ||
// //                     hoveredStandard === standard
// //                       ? "left-4"
// //                       : "left-1/2 transform -translate-x-1/2"
// //                   }`}
// //                 >
// //                   {standard}
// //                 </span>
// //                 {(selectedStandard === standard ||
// //                   hoveredStandard === standard) && (
// //                   <img
// //                     src={standards[standard].logoSrc}
// //                     alt="Logo"
// //                     className="w-12 md:w-16 h-12 md:h-16 absolute right-4 transition-all duration-300"
// //                   />
// //                 )}
// //               </button>
// //             ))}
// //           </div>
// //           <button
// //             onClick={handleFileUpload}
// //             disabled={loading}
// //             className={`w-full md:w-[70%] mx-auto mt-6 text-white text-lg md:text-xl font-bold py-2 rounded transition ${
// //               loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-700"
// //             }`}
// //           >
// //             {loading ? "Processing..." : "Submit"}
// //           </button>
// //         </div>

// //         {/* Right Side */}
// //         <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
// //           <div className="border border-green-300 p-4 bg-green-50 rounded">
// //             {loading ? (
// //               <div className="animate-spin h-8 md:h-10 w-8 md:w-10 border-t-4 border-green-700 rounded-full mx-auto"></div>
// //             ) : (
// //               <div
// //                 dangerouslySetInnerHTML={{
// //                   __html: output || "Your output will appear here.",
// //                 }}
// //               ></div>
// //             )}
// //           </div>
// //           {isOutputGenerated && (
// //             <button
// //               onClick={handleDownload}
// //               className="bg-green-700 text-white py-2 rounded w-full md:w-auto hover:bg-green-600 transition"
// //             >
// //               Download PDF
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Chatbot;

// "use client";
// import React, { useState } from "react";

// const Chatbot = () => {
//   const [pdfFile, setPdfFile] = useState(null);
//   const [selectedStandard, setSelectedStandard] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isOutputGenerated, setIsOutputGenerated] = useState(false);
//   const [hoveredStandard, setHoveredStandard] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);

//   const handleStandardHover = (standard) => {
//     setHoveredStandard(standard);
//   };

//   const standards = {
//     GRI: {
//       prompt:
//         "Using the provided data, generate a GRI compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
//       logoSrc: "images/sustain360/gri-chat.svg",
//     },
//     BRSR: {
//       prompt:
//         "Using the provided data, generate a BRSR compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
//       logoSrc: "/images/sustain360/brsr-chat.svg",
//     },
//     SASB: {
//       prompt:
//         "Using the provided data, generate a SASB compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
//       logoSrc: "/images/sustain360/sasb-chat.svg",
//     },
//   };

//   const handleFileUpload = async () => {
//     if (!pdfFile || !selectedStandard) {
//       alert("Please upload a PDF file then select a standard.");
//       return;
//     }

//     setLoading(true);
//     setIsOutputGenerated(false); // Hide download button when resubmitting
//     setPdfUrl(null);

//     const formData = new FormData();
//     formData.append("file", pdfFile);
//     formData.append("standardPrompt", standards[selectedStandard].prompt);

//     try {
//       const response = await fetch("http://localhost:3001/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) throw new Error("Failed to generate PDF.");

//       const blob = await response.blob();
//       const url = URL.createObjectURL(blob);
//       setPdfUrl(url);

//       setIsOutputGenerated(true);
//     } catch (error) {
//       alert("Error generating PDF.");
//       console.error("Upload Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDownload = () => {
//     if (!pdfUrl) return;

//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "ai-response.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleFileChange = (e) => {
//     setPdfFile(e.target.files?.[0] || null);
//     setIsOutputGenerated(false); // Hide download button
//     setPdfUrl(null);
//   };

//   return (
//     <>
//       <title>Sustain360</title>
//       <div className="flex flex-col md:flex-row min-h-screen bg-[#F1F1F1] p-8 gap-4">
//         {/* Left Side */}
//         <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
//           <label className="text-lg md:text-2xl font-bold text-center">
//             Upload PDF Document
//           </label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="border border-green-300 p-2 rounded w-full"
//           />
//           <p className="text-lg md:text-xl flex justify-center items-center font-bold">
//             Select Standard
//           </p>
//           <div className="w-full md:w-[50%] mx-auto flex flex-col gap-4">
//             {Object.keys(standards).map((standard) => (
//               <button
//                 key={standard}
//                 className={`p-2 shadow-lg py-8 md:py-10 text-lg md:text-xl font-bold rounded border flex items-center justify-center transition-all duration-300 relative ${
//                   selectedStandard === standard
//                     ? "bg-gray-200 text-green-900"
//                     : "bg-white text-green-900"
//                 }`}
//                 onClick={() => setSelectedStandard(standard)}
//                 onMouseEnter={() => handleStandardHover(standard)}
//                 onMouseLeave={() => setHoveredStandard(null)}
//               >
//                 <span
//                   className={`transition-all duration-300 absolute ${
//                     selectedStandard === standard ||
//                     hoveredStandard === standard
//                       ? "left-4"
//                       : "left-1/2 transform -translate-x-1/2"
//                   }`}
//                 >
//                   {standard}
//                 </span>
//                 {(selectedStandard === standard ||
//                   hoveredStandard === standard) && (
//                   <img
//                     src={standards[standard].logoSrc}
//                     alt="Logo"
//                     className="w-12 md:w-16 h-12 md:h-16 absolute right-4 transition-all duration-300"
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//           <button
//             onClick={handleFileUpload}
//             disabled={loading}
//             className={`w-full md:w-[70%] mx-auto mt-6 text-white text-lg md:text-xl font-bold py-2 rounded transition ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-green-900 hover:bg-green-700"
//             }`}
//           >
//             {loading ? "Processing..." : "Submit"}
//           </button>
//         </div>

//         {/* Right Side */}
//         <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
//           {isOutputGenerated && (
//             <button
//               onClick={handleDownload}
//               className="bg-green-700 text-white py-2 rounded w-full md:w-auto hover:bg-green-600 transition"
//             >
//               Download PDF
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chatbot;

"use client";
import React, { useState, useEffect } from "react";
import { marked } from "marked";
import html2pdf from "html2pdf.js";

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

  useEffect(() => {
    const resetPDFContent = async () => {
      try {
        await fetch("http://localhost:3001/reset", { method: "POST" });
        console.log("Server PDF content reset successfully.");
      } catch (error) {
        console.error("Error resetting server PDF content:", error);
      }
    };

    resetPDFContent();
  }, []);

  const formatOutput = (output) => {
    let htmlOutput = marked(output);
    htmlOutput = `<div style="text-align: left;">${htmlOutput}</div>`;
    htmlOutput = htmlOutput.replace(
      /<table>/g,
      '<table style="width: 100%; text-align: left;">'
    );
    htmlOutput = htmlOutput.replace(/<th>/g, '<th style="text-align: left;">');
    htmlOutput = htmlOutput.replace(/<td>/g, '<td style="text-align: left;">');
    return htmlOutput;
  };

  const handleFileUpload = async () => {
    if (!pdfFile || !selectedStandard) {
      alert("Please upload a PDF file then select a standard.");
      return;
    }

    setLoading(true);
    setOutput("");
    setIsOutputGenerated(false);

    const formData = new FormData();
    formData.append("file", pdfFile);
    formData.append("standardPrompt", standards[selectedStandard].prompt);
    formData.append("selectedStandard", selectedStandard);

    try {
      const response = await fetch("http://localhost:3001/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to process request");

      const data = await response.json();
      const formattedOutput = formatOutput(data.reply);
      setOutput(formattedOutput);
      setIsOutputGenerated(true);
    } catch (error) {
      setOutput("Error processing the request. Please try again.");
      console.error("Upload Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files?.[0] || null);
    setIsOutputGenerated(false);
    setOutput("");
  };

  const handleDownload = () => {
    if (!output) {
      alert("No output to download.");
      return;
    }

    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
      <style>
        * {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        table {
          page-break-inside: auto;
        }
        tr {
          page-break-inside: avoid;
          page-break-after: auto;
        }
        thead {
          display: table-header-group;
        }
        tfoot {
          display: table-footer-group;
        }
        h1, h2, h3, h4, h5, h6 {
          color: green;
          page-break-after: avoid;
          break-after: avoid;
        }
        p, div, table {
          page-break-before: avoid;
          break-before: avoid;
        }
        .section {
          page-break-inside: avoid;
          break-inside: avoid;
        }
      </style>
      ${output}
    `;

    outputDiv.style.fontFamily = "Arial, sans-serif";
    outputDiv.style.fontSize = "16px";
    outputDiv.style.lineHeight = "1.2";
    outputDiv.style.textAlign = "left";

    const options = {
      margin: 10,
      filename: "generated_report.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        dpi: 300,
        letterRendering: true,
        scale: 2,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    // Generate PDF
    html2pdf().from(outputDiv).set(options).save();

    // Clean up
    document.body.removeChild(outputDiv);
  };

  return (
    <>
      <title>Sustain360</title>
      <div className="flex flex-col md:flex-row min-h-screen bg-[#F1F1F1] p-8 gap-4">
        {/* Left Side */}
        <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
          <label className="text-lg md:text-2xl font-bold text-center">
            Upload PDF Document
          </label>
          <input
            type="file"
            onChange={handleFileChange}
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
            disabled={loading}
            className={`w-full md:w-[70%] mx-auto mt-6 text-white text-lg md:text-xl font-bold py-2 rounded transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-900 hover:bg-green-700"
            }`}
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
          <div className="border border-green-300 p-4 bg-green-50 rounded min-h-[200px]">
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
              Download Report
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Chatbot;
