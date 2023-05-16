import React, { useState } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);

const handleFileChange = (e) => {
setFile(e.target.files[0]);
};

const handleUpload = () => {
if (!file) {
alert('Please select a file');
return;
}
// Add your file upload logic here
// Example:
const formData = new FormData();
formData.append('file', file);
// Make an API request to upload the file using Axios or Fetch
console.log('File uploaded:', file.name);
};

return (
<div>
<h2>Upload File</h2>
<input type="file" onChange={handleFileChange} />
<button onClick={handleUpload}>Upload</button>
</div>
);
};

export default UploadPage;