import React, { useState } from 'react';
import './upload.css';


// a React functional component, used to create a simple upload input and button

const Upload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [showUploads, setShowUploads] = useState(false);
    const [showStatus, setShowStatus] = useState(false);

    const handleFileInput = (e) => {
        // setSelectedFile(e.target.files[0]);
        if (e.target.files[0]) {
            if (e.target.files[0].type === 'application/json') {
                setSelectedFile(e.target.files[0]);
                setErrorMessage(''); // Reset error message when a valid file is selected
            } else {
                setSelectedFile(null);
                setErrorMessage('Error: Only JSON files are allowed.');
            }
        }
    }
    const handleDeleteFile = () => {
        // Reset the selected file
        setSelectedFile(null);
    }
    const handleViewUploads = () => {
        setShowUploads(true);
        // Add logic to fetch and display uploads
        setShowStatus(null);

    };

    const uploadFile = async (file) => {
        // Add logic to Upload files here
        setShowStatus(true);
        setShowUploads(null);


    }
    return <div className="container">
        <h1>File Upload</h1>
        <div className="upload-btn-wrapper">
            <button className="btn">Choose a file</button>
            <input type="file" name="myfile" id="myfile" onChange={handleFileInput} />
        </div>
        {/* Display selected file name */}
        {selectedFile && (
            <div>
                <p className="selected-file">Selected File: {selectedFile.name} &nbsp; 
                <button onClick={handleDeleteFile} className="button-cross">X</button></p>

            </div>
        )}

        {/* Display error message if any */}
        {errorMessage && (
            <div className="error-message">{errorMessage}</div>
        )}
        <div className="button-container">
            <button onClick={() => uploadFile(selectedFile)}>Upload</button><br />
            {showStatus && (
                <div>
                    {/* Add logic to display uploads here */}
                    <p className="status-message">Upload Successfully</p>
                </div>
            )}
            {/* <button >Upload to S3</button><br/> */}
            <button onClick={handleViewUploads}>View Uploads</button>
        </div>

        {/* Conditional rendering for uploads */}
        {showUploads && (
            <div>
                {/* Add logic to display uploads here */}
                <p className="status-message">Uploads will be displayed here</p>
            </div>
        )}
    </div>
}

export default Upload;
