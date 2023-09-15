import React from 'react';
import CourseStyle from '../../styles/Course.module.scss';

const InstutionFees = ({ fees }) => {
  return (
    <>
      <div className={CourseStyle.coursesGridCon}>
        <>
          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Fee Description</div>
          </div>

          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Fee</div>
          </div>
          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Frequency</div>
          </div>
        </>
        {fees.map((fee, ind) => (
          <div key={ind}>
            <div className={CourseStyle.coursesColGrid}>
              {fee.Fees && (
                <div className={CourseStyle.coursecode}>{fee.Fees}</div>
              )}
            </div>

            <div className={CourseStyle.coursesColGrid}>
              {fee.Citizens && (
                <div className={CourseStyle.coursename}>{fee.Citizens}</div>
              )}
            </div>
            <div className={CourseStyle.coursesColGrid}>
              {fee.Per && <div className={CourseStyle.credits}>{fee.Per}</div>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InstutionFees;
