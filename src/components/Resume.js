import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/pdf/resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Resume;
