import React from 'react'
import CourseStyle from '../../styles/Course.module.scss'

import {
  Divider

} from "@mui/material";

const DegreeCourses = ({courses} ) => {
              const totalCredits = courses.reduce((total,item)=>{
                return total + item.credits
              },0);

  return (
    <>
      <div className={CourseStyle.coursesGridCon}>
        <>
          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Course Code</div>
          </div>

          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Course Name</div>
          </div>
          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Credits</div>
          </div>
        </>
        {courses.map((course) => (
          <>
            <div className={CourseStyle.coursesColGrid}>
              {course.coursecode && (
                <div className={CourseStyle.coursecode}>
                  {course.coursecode}
                </div>
              )}
            </div>

            <div className={CourseStyle.coursesColGrid}>
              {course.coursename && (
                <div className={CourseStyle.coursename}>
                  {course.coursename}
                </div>
              )}
            </div>
            <div className={CourseStyle.coursesColGrid}>
              {course.credits && (
                <div className={CourseStyle.credits}>{course.credits}</div>
              )}
            </div>
          </>
        ))}
        
          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}></div>
          </div>

          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.courseheadings}>Total Credits</div>
          </div>
          <div className={CourseStyle.coursesColGrid}>
            <div className={CourseStyle.creditstotal}>{totalCredits}</div>
          </div> 
        
      </div>
    </>
  );
}

export default DegreeCourses