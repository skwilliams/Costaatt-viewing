import React from 'react'
import CourseStyle from "../../styles/Course.module.scss"


const Requirements = ({reqs}) => {
  return (
    <>
      <div className={CourseStyle.entryreq}>
        <ul className={CourseStyle.list}>
          {reqs.map((req, index) => {
            return (
              <li className={CourseStyle.items} key={index}>
                {req}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Requirements