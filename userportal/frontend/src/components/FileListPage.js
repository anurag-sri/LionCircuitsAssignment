import React from 'react';

const FileListPage = () => {
  // Replace this with the actual list of files from the backend
  const files = [    { id: 1, filename: 'file1.pdf', date_uploaded: '2023-05-01', file_type: 'pdf' },    { id: 2, filename: 'file2.txt', date_uploaded: '2023-05-02', file_type: 'txt' },    { id: 3, filename: 'file3.xlsx', date_uploaded: '2023-05-03', file_type: 'excel' },  ];

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