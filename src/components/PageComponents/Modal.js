// Modal.js
// Modal.js

import { useState } from "react";
import ModalStyles from "../../styles/Modal.module.scss";
import AboutStyles from "../../styles/About.module.scss";

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
           
            <button 
            className={`${AboutStyles.btn}  ${AboutStyles.rightalign } ${AboutStyles.btn__white }`}
            onClick={handleClose}> X</button>
            {/* &times; */}
          
            <div className={ModalStyles.modal__content}>{children}</div>
          </div>
         </div> 
      )}
    </>
  );
};

export default Modal;
