import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import QRCode  from 'react-qr-code';
import CryptoJS from 'crypto-js';
import Modal from 'react-modal';
import './Encrypt.css';

Modal.setAppElement('#root');

const Encrypt = () => {
  const { register, handleSubmit, reset } = useForm();
  const [qrValue, setQrValue] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const qrRef = useRef();
  const encryptionKey = 'your-encryption-key';
  const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), encryptionKey).toString();
  };

  const onSubmit = data => {
    const encryptedData = encryptData(data);
    setQrValue(encryptedData);
    setModalIsOpen(true);
  };


  const closeModal = () => {
    setModalIsOpen(false);
    reset();
  };

   const downloadQR = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = image;
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="encrypt-container">
      <h1>Encrypt Your Information</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="encrypt-form">
        <input {...register("licensePlate")} placeholder="License Plate Number" required />
        <input {...register("vin")} placeholder="Vehicle Identification Number (VIN)" required />
        <input {...register("ownerName")} placeholder="Owner's Full Name" required />
        <input {...register("ownerID")} placeholder="Owner's Identification Number" required />
        <input {...register("insurancePolicyNumber")} placeholder="Insurance Policy Number" />
        <textarea {...register("additionalInfo")} placeholder="Additional Information (optional)" />
        <button type="submit">Generate Encrypted QR Code</button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <IoMdClose className="close-icon" onClick={closeModal} />
        <div className="qr-container" ref={qrRef}>
          <QRCode value={qrValue} size={256} level="H" />
        </div>
        <button onClick={downloadQR} className="download-button">
          Download QR Code
        </button>
    </Modal>
    </div>
  );
};

export default Encrypt;
