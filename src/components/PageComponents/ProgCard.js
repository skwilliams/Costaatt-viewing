import React from "react";
import CardStyle from "../../styles/ProgCard.module.scss";
import Image from "next/image";

const ProgCard = ({ course }) => {
  return (
    <>
      <div className={CardStyle.progGridConthree}>
        <>
          <div className={CardStyle.progGridthree}>
            <Image
              className={CardStyle.imgstyle}
              src={course.photo}
              alt={course.alttext}
              width="200"
              height="200"
            />
            {/* <div className={CardStyle.bannerbottomBsc}> Bachelors</div> */}
          </div>
          <div className={CardStyle.progGridthree}>
            <div className={CardStyle.coursersetitle}>{course.degreeTitle}</div>{" "}
            {/*dynamic content}*/}
            <div className={CardStyle.block}>
              <p className={CardStyle.cardtext}> {course.campus}</p>{" "}
              {/* fixed */}
              <p className={CardStyle.cardtextIn}>
                {course.fulltime} years full time
              </p>{" "}
              {/*dynamic content}*/}
              <p className={CardStyle.cardtextIn}>
                {course.parttime} years part-time
              </p>{" "}
              {/*dynamic content}*/}
            </div>
            {/* <div className={CardStyle.bannerbottomAas}> Associate</div> */}
          </div>

          <div className={CardStyle.progGridthree}>
            <div className={CardStyle.block2}>
              <p className={CardStyle.cardtextIn}> Entry Dates</p> {/* fixed */}
              <p className={CardStyle.cardtext}>{course.startdate1}</p>{" "}
              {/*dynamic content}*/}
              <p className={CardStyle.cardtext}>{course.startdate2}</p>{" "}
              {/*dynamic content}*/}
            </div>
            {/* <div className={CardStyle.bannerbottomDip}> Certificate</div> */}
          </div>

          <div className={CardStyle.bannerbottom}> {course.level} </div>
        </>
      </div>
    </>
  );
};

export default ProgCard;
