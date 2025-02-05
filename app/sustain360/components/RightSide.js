// components/RightSide.js
import React from "react";
import html2pdf from "html2pdf.js";

const RightSide = ({ loading, output, isOutputGenerated }) => {
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

    outputDiv.style.fontFamily = "Arial , sans-serif";
    outputDiv.style.fontSize = "16px";
    outputDiv.style.lineHeight = "1.2";
    outputDiv.style.textAlign = "left";

    document.body.appendChild(outputDiv);

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

    html2pdf().from(outputDiv).set(options).save();
    document.body.removeChild(outputDiv);
  };

  return (
    <div className="right-side">
      <div className="output-container">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div
            className="output-text"
            dangerouslySetInnerHTML={{
              __html: output || "Your output will appear here.",
            }}
          ></div>
        )}
      </div>
      {isOutputGenerated && (
        <button className="download-button" onClick={handleDownload}>
          Download PDF
        </button>
      )}
    </div>
  );
};

export default RightSide;
