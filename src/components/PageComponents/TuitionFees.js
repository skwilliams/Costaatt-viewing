import React from "react";
import CourseStyle from "../../styles/Course.module.scss";

const TuitionFees = ({ fees }) => {
  return (
    <>
      <div className={CourseStyle.coursesGridCon}>
        <>
          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Student Type</div>
          </div>

          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Cost Per Credit</div>
          </div>
          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Total Cost</div>
          </div>
        </>
        {fees.map((fee) => (
          <>
            <div className={CourseStyle.coursesColGrid}>
              {fee.studenttype && (
                <div className={CourseStyle.coursecode}>{fee.studenttype}</div>
              )}
            </div>

            <div className={CourseStyle.coursesColGrid}>
              {fee.costpercredit && (
                <div className={CourseStyle.coursename}>
                  {fee.costpercredit}
                </div>
              )}
            </div>
            <div className={CourseStyle.coursesColGrid}>
              {fee.totalcost && (
                <div className={CourseStyle.credits}>{fee.totalcost}</div>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default TuitionFees
