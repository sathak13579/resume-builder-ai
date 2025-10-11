import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function PDFExport({ formData }) {
  const generatePDF = async () => {
    // Basic PDF generation scaffold
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.setFontSize(20);
    doc.text(formData.fullName || 'Your Name', 20, 20);
    doc.setFontSize(12);
    doc.text(formData.email || 'email@example.com', 20, 30);
    doc.text(formData.phone || '(000) 000-0000', 20, 35);
    
    doc.setFontSize(14);
    doc.text('Professional Summary', 20, 50);
    doc.setFontSize(10);
    doc.text(formData.summary || 'No summary provided', 20, 60, { maxWidth: 170 });
    
    doc.setFontSize(14);
    doc.text('Experience', 20, 80);
    doc.setFontSize(10);
    doc.text(formData.experience || 'No experience provided', 20, 90, { maxWidth: 170 });
    
    doc.setFontSize(14);
    doc.text('Education', 20, 110);
    doc.setFontSize(10);
    doc.text(formData.education || 'No education provided', 20, 120, { maxWidth: 170 });
    
    doc.setFontSize(14);
    doc.text('Skills', 20, 140);
    doc.setFontSize(10);
    doc.text(formData.skills || 'No skills provided', 20, 150, { maxWidth: 170 });
    
    // Save the PDF
    doc.save('resume.pdf');
  };

  return (
    <div className="pdf-export">
      <button onClick={generatePDF} className="export-button">
        Download Resume as PDF
      </button>
    </div>
  );
}

export default PDFExport;