import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import './Project.css';

Modal.setAppElement('#root');

const featureBoxVariants = {
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300 },
  },
};

const modalVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const FeatureBox = ({ title, content }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <motion.div
        className="feature"
        variants={featureBoxVariants}
        whileHover="hover"
        onClick={openModal}
        layout
      >
        <h2>{title}</h2>
      </motion.div>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={300}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <IoClose className="close-icon" onClick={closeModal} />
            <h2>{title}</h2>
            <p>{content}</p>
          </motion.div>
        </Modal>
      )}
    </>
  );
};

const Project = () => {
  return (
    <div className="project-container">
      <section className="project-intro">
        <h1>StealthQR: The Future of Vehicle Identification</h1>
        <p>Transforming toll collection and vehicle identification with secure, invisible QR codes.</p>
      </section>
      <section className="project-features">
        <FeatureBox 
          title="Novelty and Innovation" 
          content="StealthQR represents a leap forward by combining advanced materials and encryption for a new era of security and efficiency."
        />
        <FeatureBox 
          title="Technological Feasibility" 
          content="Built on cutting-edge encryption and blockchain technology, StealthQR's implementation is both practical and forward-thinking."
        />
        <FeatureBox 
          title="User-Centric Design" 
          content="Developed with input from users and stakeholders, StealthQR addresses real-world needs with innovative solutions."
        />
      </section>
    </div>
  );
};

export default Project;
