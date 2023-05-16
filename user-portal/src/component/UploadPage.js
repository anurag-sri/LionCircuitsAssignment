import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
const [file, setFile] = useState(null);
const [error, setError] = useState('');

const handleFileChange = (e) => {
setFile(e.target.files[0]);
};

const handleUpload = async () => {
setError('');
if (!file) {
setError('Please select a file.');
return;
}
try {
const formData = new FormData();
formData.append('file', file);
await axios.post('/api/upload/', formData, {
headers: {
'Content-Type': 'multipart/form-data',
},
});
// Clear file input and show success message
setFile(null);
setError('File uploaded successfully.');
} catch (error) {
setError('An error occurred. Please try again.');
}
};

return (
<div>
<h2>Upload File</h2>
{error && <p>{error}</p>}
<input type="file" onChange={handleFileChange} />
<button onClick={handleUpload}>Upload</button>
</div>
);
};

export default UploadPage;