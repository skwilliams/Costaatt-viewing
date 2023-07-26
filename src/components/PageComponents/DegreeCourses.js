import React from 'react'
import CourseStyle from '../../styles/Course.module.scss'

import {
  Divider

} from "@mui/material";

const DegreeCourses = ({courses} ) => {
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
      </div>
    </>
  );
}

export default DegreeCourses