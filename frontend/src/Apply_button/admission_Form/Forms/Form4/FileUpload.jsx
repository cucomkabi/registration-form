import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./FileUpload.css"; 

const FileUpload = ({ label }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
      "application/pdf": [".pdf"],
    },
    multiple:false, // Adjust this as needed
  });

  return (
    <div className="file-upload-container">
      <label className="upload-label">
        {label}<span className="required">*</span>
      </label>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="upload-box">
          <p>Drag and drop files here</p>
          <button type="button" className="browse-button">
            Browse Files
          </button>
        </div>
      </div>
      {files.length > 0 && (
        <div className="file-preview">
          <p>Uploaded file: {files[0].name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
