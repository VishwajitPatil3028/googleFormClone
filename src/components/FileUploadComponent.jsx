import React, { useState } from 'react';
import { Button, Input, Typography } from '@mui/material';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can perform file upload logic here
      console.log('Uploading file:', selectedFile);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
    <div>
    <Typography
          variant="h5"
          sx={{ fontWeight: "bold", pl: 2,pb: 2 }}
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          File Upload Component
        </Typography>
      <Input
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button variant="outlined" component="span">
          Select File
        </Button>
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!selectedFile}
      >
        Upload
      </Button>
      {selectedFile && (
        <Typography variant="body1">
          Selected file: {selectedFile.name}
        </Typography>
      )}
    </div>
    </div>
  );
};

export default FileUploadComponent;
