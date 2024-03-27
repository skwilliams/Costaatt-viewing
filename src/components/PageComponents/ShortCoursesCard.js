import React from "react";
import CardStyle from "../../styles/ProgCard.module.scss";

const ShortCoursesCard = ({ course }) => {
  return (
    <>
      <div className={CardStyle.progGridConthree}>
        <>
          <div className={CardStyle.progGridthree}>
            <div className={CardStyle.coursetitle}>{course.course_title}</div>{" "}
            {/*dynamic content}*/}
            <div className={CardStyle.block}>
              <p className={CardStyle.courseDescript}>
                {" "}
                {course.course_description}
              </p>{" "}
              {/* fixed */}
              <p className={CardStyle.cardtextIn}>
                {course?.credits} credits
              </p>{" "}
              {/*dynamic content}*/}
              {/* <p className ={CardStyle.cardtextIn}></p> */}
              <p className={CardStyle.cardtextIn}>
                Modality: {course.modality}
              </p>{" "}
              <p className={CardStyle.cardtextCost}> Cost :${course.cost}</p>
              {/*dynamic content}*/}
            </div>
          </div>
        </>
      </div>
      <div className={CardStyle.progGridConthree}>
        <>
          <div className={CardStyle.bannerbottomleft}> {course.area}</div>
        
        </>
      </div>
    </>
  );
};

export default ShortCoursesCard;
