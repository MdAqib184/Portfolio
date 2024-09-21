import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Aqib_Resume.pdf"; // Ensure this path is correct
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set the worker source to the local file in your public directory
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";  // Path relative to the public directory

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            download="Aqib_Resume.pdf"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            loading={<div>Loading PDF...</div>}
            onLoadSuccess={() => console.log('PDF loaded successfully')}
            onLoadError={(error) => console.error('Error loading PDF:', error)}
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              onRenderSuccess={() => console.log('Page rendered successfully')}
              onRenderError={(error) => console.error('Error rendering page:', error)}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            download="Aqib_Resume.pdf"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
