import React, { useState, useEffect } from 'react';
import jsQR from 'jsqr';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import CryptoJS from 'crypto-js';
import './Decrypt.css';

Modal.setAppElement('#root');

const encryptionKey = 'your-encryption-key'; // Replace with the actual key used in encrypt.js

const Decrypt = () => {
  const [data, setData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [decryptError, setDecryptError] = useState('');
  const [useCamera, setUseCamera] = useState(false);

  useEffect(() => {
    if (data) {
      setModalIsOpen(true);
    }
  }, [data]);

  const decryptData = (encryptedData) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      setData(decryptedData);
    } catch (e) {
      console.error(e);
      setDecryptError('Failed to decrypt data. Please ensure you have scanned the correct QR code.');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target.result;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const image = new Image();
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          decryptData(code.data);
        } else {
          setDecryptError('No QR code found. Please try another image.');
        }
      };
      image.src = imageData;
    };
    reader.readAsDataURL(file);
  };

  const handleCameraScan = (result) => {
    if (result) {
      decryptData(result);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setData(null);
    setDecryptError('');
  };

  // To toggle between file upload and camera scanning
  const toggleCamera = () => {
    setUseCamera(!useCamera);
  };

  return (
    <div className="decrypt-container">
      <h1>Decrypt Your QR Code</h1>
      {useCamera ? (
        <div>
          <button onClick={toggleCamera}>Upload QR Code Image</button>
        </div>
      ) : (
        <>
          <button onClick={() => document.getElementById('qrInput').click()}>
            Upload QR Code Image
          </button>
          <input
            type="file"
            id="qrInput"
            onChange={handleFileUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <button onClick={toggleCamera}>Use Camera</button>
        </>
      )}
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <IoMdClose className="close-icon" onClick={closeModal} />
        {decryptError && <p className="error">{decryptError}</p>}
        {!decryptError && data && (
          <div className="decrypted-data">
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="data-field">
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Decrypt;
