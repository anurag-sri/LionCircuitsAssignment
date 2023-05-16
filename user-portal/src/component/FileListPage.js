
- Update the `FileListPage.js` component to fetch and display the list of uploaded files:
```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileListPage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files/');
        setFiles(response.data);
      } catch (error) {
        console.log('An error occurred while fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <table>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Date Uploaded</th>
            <th>File Type</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td>{file.filename}</td>
              <td>{file.date_uploaded}</td>
              <td>{file.file_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileListPage;
