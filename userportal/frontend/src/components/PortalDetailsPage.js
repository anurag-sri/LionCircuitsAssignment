import React from 'react';

const PortalDetailsPage = () => {
  // Replace this with the actual portal details from the backend
  const portalDetails = {
    total_files: 10,
    pdf_files: 5,
    excel_files: 3,
    txt_files: 2,
    user_files: 4,
  };

  return (
    <div>
      <h2>Portal Details</h2>
      <p>Total number of files uploaded: {portalDetails.total_files}</p>
      <p>Number of PDF files: {portalDetails.pdf_files}</p>
      <p>Number of Excel files: {portalDetails.excel_files}</p>
      <p>Number of Text files: {portalDetails.txt_files}</p>
      <p>Number of files uploaded by current user: {portalDetails.user_files}</p>
    </div>
  );
};

export default PortalDetailsPage;