import StaffStyle from "../../styles/StaffDeptCard.module.scss";
import gridStyles from "../../styles/Grid.module.scss";
import standardStyles from "../../styles/main.module.scss";
import AboutStyles from "../../styles/About.module.scss";
import React, { useState } from "react";
import ModalStyles from "../../styles/Modal.module.scss";
import Image from "next/image";


import Modal from "./Modal";

const ExecutiveCard = ({exec}) => {
  
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

  return (
    <>
      {exec.photo && exec.altText && (
        <Image
          className={ModalStyles.modal__overlay__content__img}
          src={exec.photo}
          alt={exec.altText}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality="100"
          // fill={true}
          onLoad={(e) => console.log(e)} // {naturalHeight: ..., naturalWidth: ...}
          width="200"
          height="200"
        />
      )}

      {exec.name && <p className={AboutStyles.name}>{exec.name}</p>}
      {exec.position && <p className={AboutStyles.position}>{exec.position}</p>}

      <button
        className={`${AboutStyles.btn} ${AboutStyles.btn__purple} `}
        onClick={openModal}
      >
        Read Bio
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={ModalStyles.modal__overlay__content}>
          <div className={ModalStyles.modal__overlay__content__left}>
            <Image
              src={exec.photo}
              alt={exec.altText}
              height="200"
              width="200"
              className={ModalStyles.modal__overlay__content__img}
            />
            {/* Name   */}
            <h2 className={ModalStyles.modal__overlay__name}> {exec.name}</h2>

            {/* position */}
            <h3 className={ModalStyles.modal__overlay__position}>
              {" "}
              {exec.position}
            </h3>
          </div>
          <div className={ModalStyles.modal__overlay__content__right}>
            <p className={ModalStyles.modal__overlay__text}>{exec.bio}</p>
          </div>
          {/* close content area */}
        </div>
      </Modal>
    </>
  );
};

export default ExecutiveCard;
