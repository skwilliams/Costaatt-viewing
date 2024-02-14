import React from "react";
import styles from "../../styles/EducationSection.module.scss"
import Image from "next/image";


const EducationSection = ({image}) => {
  return (
    <>
      <div className={styles.educationSection}>
        <div className={styles.textContent}>
          <h1 className={styles.header}>An Education for Everyone</h1>
          <p className={styles.description}>
            No matter where you are you will find a pathway to higher education
            at COSTAATT
          </p>
          <ul className={styles.linkList}>
            <li className={styles.activeLink}>UndergraduateDegrees</li>
            <li> Assoicate Degrees </li> 
            <li>Professional Development</li>
            <li>Pre College Courses</li>

            <li>Diplomas and Certificates</li>
            <li>Visit Us</li>
          </ul>
        </div>
        <div className={styles.imageContent}>
          {/* Image component - for example purposes, using an img tag */}
          <Image
            className={styles.img}
            width="300"
            height="300"
            src={image}
            alt="Campus Life"
          />
        </div>
      </div>
    </>
  );
  
};
export default EducationSection;