import React from "react";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Resume from "./Resume";
import Button from "@mui/joy/Button";
import html2canvas from "html2canvas";
import { ButtonGroup } from "@mui/material";
import jsPDF from "jspdf";
import HorizontalNonLinearStepper from "./newstepper";
import Typography from "@mui/material/Typography";

function Editor() {
  const [activeComponent, setActiveComponent] = useState("");
  const componentRef = useRef(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const downloadPDF = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div style={{paddingTop:"80px"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f1f1f1",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: 800,
            backgroundColor: "#ffffff",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: "40px" }}>
            Build Your Resume
          </Typography>
          <HorizontalNonLinearStepper />
        </Box>
      </Box>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#F2F2F2",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        <div ref={componentRef}>
          <Resume />
        </div>
        <div class="button-container" style={{ padding: "20px 0" }}>
          <button
            class="button"
            style={{
              backgroundColor: "#19376D",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s ease-in-out",
            }}
            onClick={downloadPDF}
          >
            Download RESUME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editor;
