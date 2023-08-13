import React from "react";
import CardStyle from "../../styles/ProgCard.module.scss";

const ShortCoursesCard = ({ course }) => {
  return (
    <>
      <div className={CardStyle.progGridConthree}>
        <>
          <div className={CardStyle.progGridthree}>
            <div className={CardStyle.coursetitle}>{course.courseTitle}</div>{" "}
            {/*dynamic content}*/}
            <div className={CardStyle.block}>
              <p className={CardStyle.courseDescript}>
                {" "}
                {course.courseDescript}
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
              {/*dynamic content}*/}
            </div>
            {/* <div className={CardStyle.bannerbottomAas}> Associate</div> */}
          </div>
        </>
      </div>
      <div className={CardStyle.progGridConthree}>
        <> 

        <div className={CardStyle.bannerbottomleft}>
          {" "}
          Cost :${course.cost}  
        </div>

      </>
    </div>
    </>
  );
};

export default ShortCoursesCard;
