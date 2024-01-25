
import React , {useState} from "react";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import Link from "next/link";
import { deans,vps,management,heads } from "./leadershipdata";
import FacultyStaffCard from "@/components/PageComponents/FacultyStaffDepCard";
import DeptStyles from "../../styles/DepartCard.module.scss";
import ModalStyles from "../../styles/Modal.module.scss";
import Image from "next/image";

import photo from "../../../public/images/Leadership photos/Naseem-Koylass.jpg";

import BioCard from "@/components/PageComponents/BioCard";

import SearchBarModal from "@/components/SearchBarModal";
import BioModal from "@/components/PageComponents/BioModal";
import Modal from "@/components/PageComponents/Modal";
import HomeStyles from "../../styles/Home.module.scss";



 const Executiveleaders = () => {


const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};




  return (
    <>
      <Head>
        <title>Executive |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="College Leadership" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/executive">Executive</Link>
      </p>

      <section
        id="vps"
        className={`${standardStyles.sectionNoSidenavMar} ${standardStyles.centertext}`}
      >
        <p className={standardStyles.paragraph}>
          Our Executive Leadership Team of highly experienced, motivated and
          professional administrators are committed to taking COSTAATT to higher
          levels of quality, service standards and global recognition.
        </p>
        <h2 className={standardStyles.newsHeading}>Executive Leaders</h2>

        <button
          // className={standardStyles.btn}
          className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
          onClick={openModal}
        >
          Read Bio
        </button>

        {/* <div  className={ModalStyles.modal__overlay}> */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className={ModalStyles.modal__overlay__content}>
            <div className={ModalStyles.modal__overlay__left}>
              <Image
                src={photo}
                alt="Naseem photo"
                height="200"
                width="200"
                className={ModalStyles.modal__overlay__img}
              />
              {/* <h2 className={ModalStyles.modal__overlay__name}>
                {" "}
                Naseem Koylass
              </h2> */}

              {/* position */}
              {/* <h3 className={ModalStyles.modal__overlay__position}>
                {" "}
                Vice President, Academic Affairs
              </h3> */}
            </div>
            <div className={ModalStyles.modal__overlay__right}>
              {/* Name  */}
              <h2 className={ModalStyles.modal__overlay__name}>
                {" "}
                Naseem Koylass
              </h2>

              {/* position */}
              <h3 className={ModalStyles.modal__overlay__position}>
                {" "}
                Vice President, Academic Affairs
              </h3>
              <p className={ModalStyles.modal__overlay__text}>
                Dr. Naseem Koylass was appointed to the position of Vice
                President, Academic Affairs effective July 1, 2022.Dr. Koylass
                is a long-standing member of the COSTAATT community and has held
                a wide range of leadership positions over the last 20 years,
                including department chair, campus dean and more recently,
                Associate Vice President, Academic Affairs.Dr Koylass has played
                a critical role in the College's accreditation and quality
                assurance activities since COSTAATT was first established in
                October 2000, and brings to her new position a wealth of
                knowledge and experience in academic and administrative
                leadership . Dr. Naseem Koylass was appointed to the position of
                Vice President, Academic Affairs effective July 1, 2022.Dr.
                Koylass is a long-standing member of the COSTAATT community and
                has held a wide range of leadership positions over the last 20
                years, including department chair, campus dean and more
                recently, Associate Vice President, Academic Affairs.Dr Koylass
                has played a critical role in the College's accreditation and
                quality assurance activities since COSTAATT was first
                established in October 2000, and brings to her new position a
                wealth of knowledge and experience in academic and
                administrative leadership
              </p>
            </div>
            {/* close content area */}
          </div>
        </Modal>
        {/* </div> */}
        <div className={standardStyles.row}>
          {/* <BioCard staff={vps} /> */}
        </div>
      </section>
      <section
        id="mgmt"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <h2 className={standardStyles.newsHeading}>Management Team</h2>
        <div className={DeptStyles.threeColGridCon}>
          <FacultyStaffCard staff={management} />
        </div>
      </section>
      <section
        id="deans"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <h2 className={standardStyles.newsHeading}>Deans</h2>
        <div className={DeptStyles.threeColGridCon}>
          <FacultyStaffCard staff={deans} />
        </div>
      </section>
      <section
        id="head"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <h2 className={standardStyles.newsHeading}>Heads of Department</h2>
        <div className={DeptStyles.threeColGridCon}>
          <FacultyStaffCard staff={heads} />
        </div>
      </section>
    </>
  );
}

export default Executiveleaders