// Modal.js
// Modal.js

import { useState } from "react";
import ModalStyles from "../../styles/Modal.module.scss";
import Image from "next/image";
import photo from "../../../public/images/Leadership photos/Naseem-Koylass.jpg";

const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={ModalStyles.modal__overlay}>
          <div className={ModalStyles.modal}>
            <div className={ModalStyles.modal__overlay__closeButton}
            >
            <button onClick={handleClose} >Close</button></div>
            <div className={ModalStyles.modal__content}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
