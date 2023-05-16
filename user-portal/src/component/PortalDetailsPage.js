import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PortalDetailsPage = () => {
  const [portalDetails, setPortalDetails] = useState(null);

  useEffect(() => {
    const fetchPortalDetails = async () => {
      try {
        const response = await axios.get('/api/portal-details/');
        setPortalDetails(response.data);
      } catch (error) {
        console.log('An error occurred while fetching portal details:', error);
      }
    };

    fetchPortalDetails();
  }, []);

  return (
    <div>
      <h2>Portal Details</h2>
      {portalDetails && (
        <div>
          <p>Total number of files uploaded: {portalDetails.total_files}</p>
          <p>Number of PDF files: {portalDetails.pdf_files}</p>
          <p>Number of Excel files: {portalDetails.excel_files}</p>
          <p>Number of Text files: {portalDetails.txt_files}</p>
          <p>Number of files uploaded by current user: {portalDetails.user_files}</p>
        </div>
      )}
    </div>
 );
};

export default PortalDetailsPage;
