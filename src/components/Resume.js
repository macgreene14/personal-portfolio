import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/pdf/resume.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "../assets/css/Background.css";
import "../assets/css/PDF.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MacGreeneResume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="bg flex flex-col items-center">
      <button
        onClick={onButtonClick}
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Download PDF
      </button>
      <Document
        renderTextLayer={false}
        renderAnnotationLayer={false}
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          renderTextLayer={false}
          renderAnnotationLayer={false}
          sie="A4"
          pageNumber={pageNumber}
        />
      </Document>
    </div>
  );
}

export default Resume;
