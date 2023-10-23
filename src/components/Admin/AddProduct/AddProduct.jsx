import React, { useState, useRef } from 'react';
import s from './AddProduct.module.css';
import axios from 'axios';

const AddProduct = () => {
  const hostUrl = '/upload';
  const formData = new FormData();
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      return alert('Please select a file');
    }
    console.log(selectedFile);
    formData.append('file', selectedFile);
    console.log(formData);
    // const data = await axios.post(hostUrl, { formData });
    // setUploaded(data);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <>
      <button onClick={handlePick}>Pick file</button>
      <input
        className={s.hidden}
        type="file"
        ref={filePicker}
        onChange={handleChange}
        // multiple
        accept="image/*,.png,.jpg,.gif,.web"
      />

      <button onClick={handleUpload}>Upload now!</button>

      {selectedFile && (
        <ul>
          <li>Name: {selectedFile.name}</li>
          <li>Type: {selectedFile.type}</li>
          <li>Size: {selectedFile.size}</li>
          <li>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </li>
        </ul>
      )}
      {uploaded && (
        <div>
          <h2></h2>
          <img src={uploaded.filePath} width="200" />
        </div>
      )}
    </>
  );
};

export default AddProduct;
