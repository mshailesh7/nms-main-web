// components/LeftSide.js
import React, { useState } from "react";
import axios from "axios";

const LeftSide = ({ setOutput, setIsOutputGenerated, setLoading, setPdfFile, setSelectedStandard }) => {
  const [pdfFile, localSetPdfFile] = useState(null);
  const [selectedStandard, localSetSelectedStandard] = useState("");
  
  const predefinedPrompts = {
    "Global Reporting Initiative (GRI)":
      "Using the provided data, generate a GRI compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
    "Business Responsibility and Sustainability Reporting (BRSR)":
      "Using the provided data, generate a BRSR compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
    "Sustainability Accounting Standards Board (SASB)":
      "Using the provided data, generate a SASB compliant report with material topics highlighted and interpret the data. Do not stop until the entire data is processed.",
  };

  const handleFileUpload = async () => {
    if (!localSetPdfFile || !localSetSelectedStandard) {
      setOutput("Please upload a PDF file then select a standard.");
      return;
    }

    const formData = new FormData();
    formData.append("file", pdfFile);
    formData.append("standardPrompt", predefinedPrompts[selectedStandard]);
    formData.append("selectedStandard", selectedStandard);

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/upload", formData);
      const formattedOutput = formatOutput(response.data.reply);
      setOutput(formattedOutput);
      setIsOutputGenerated(true);
    } catch (error) {
      setOutput("Error processing the request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStandardClick = (standard) => {
    setOutput(""); // Reset the output when selecting a new standard
    setIsOutputGenerated(false);
    setLoading(false);
    setSelectedStandard(standard);
    localSetSelectedStandard(standard);
  };

  return (
    <div className="left-side">
      <div className="logo-container">
        <img src="/frame.png" alt="Sustain360 Logo" className="logo" />
      </div>

      <div className="upload-section">
        <label htmlFor="file-input" className="title">
          Upload PDF Document
        </label>
        <input
          type="file"
          id="file-input"
          onChange={(e) => localSetPdfFile(e.target.files?.[0] || null)}
          className="file-input"
        />
      </div>

      <div className="standard-section">
        <p className="standard-title">Select Standard</p>
        <div className="standard-options">
          {Object.keys(predefinedPrompts).map((standard) => (
            <button
              key={standard}
              className={`standard-button ${selectedStandard === standard ? "active" : ""}`}
              onClick={() => handleStandardClick(standard)}
            >
              {standard}
            </button>
          ))}
        </div>
      </div>

      <button className="submit-button" onClick={handleFileUpload}>
        Submit
      </button>
    </div>
  );
};

export default LeftSide;
