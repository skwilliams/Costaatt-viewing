import React from "react";
import CardStyle from "../../styles/ProgCard.module.scss";
import Image from "next/image";

const CollegeCoreCard = ({ course }) => {
  return (
    <>
      <div className={CardStyle.progGridConthree}>
        <>
       
          <div className={CardStyle.progGridthree}>
            <div className={CardStyle.coursetitle}>{course.courseTitle}</div>{" "}
            {/*dynamic content}*/}
            <div className={CardStyle.block}>
              <p className={CardStyle.cardtext}> {course.courseCode}</p>{" "}
              {/* fixed */}
              <p className={CardStyle.cardtextIn}>
                {course.credits} credits
              </p>{" "}
              {/*dynamic content}*/}
              {/* <p className ={CardStyle.cardtextIn}></p> */}
              <p className={CardStyle.cardtextIn}>Pre-requisite: {course.prerequisite}</p>{" "}
              {/*dynamic content}*/}
            </div>
            {/* <div className={CardStyle.bannerbottomAas}> Associate</div> */}
          </div>
        </>
      </div>
      <div className={CardStyle.progGridConthree}>
        <div className={CardStyle.bannerbottom}> {course.discipline}</div>
      </div>
    </>
  );
};

export default CollegeCoreCard;
