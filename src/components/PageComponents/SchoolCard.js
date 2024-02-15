import React from 'react';
import SchoolStyles from '../../styles/SchoolCard.module.scss';
import Image from "next/image";
import Link from "next/link";
 

const SchoolCard = ({image,schoolname,intro,linkpage,shortname,foundSchool}) => {
  return (
    <>
      <div className={SchoolStyles.row}>
        <div className={SchoolStyles.col1of2}>
          <Image
            className={SchoolStyles.imgstyle}
            src={image}
            width={4000}
            alt="School Image"
          />
        </div>
        <div className={SchoolStyles.col1of2}>
          <p className={SchoolStyles.schoolname}> {schoolname}</p>
          <p className={SchoolStyles.text}>{intro} </p>
          <h2>Areas of Study </h2>
          <p className={SchoolStyles.studyareas}> 
            {/* Map over all areas of study  */}
            {/* {foundDept.coreValues.map((value) => {
              return (
                <div key={value}>
                  <ul>
                    <li className={ProgStyles.degcoursesli}>
                      <span> {value} </span> - {getCoreValues(value)}
                    </li>
                  </ul>
                </div>
              );
            })} */}
            Accounting| Business Administration | Entrepreneurship |Human
            Resources | Information Technology | Library Studies |
            Marketing | Networking | Supervisory Management | Records
            Management |Web Development
          </p>

          <Link className={SchoolStyles.linkpage} href={linkpage}>
            visit {shortname}...{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default SchoolCard