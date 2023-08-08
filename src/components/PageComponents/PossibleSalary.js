import React from "react";
import CourseStyle from "../../styles/Course.module.scss";



const PossibleSalary = ({ salaries }) => {
  return (
    <>
<table className={CourseStyle.careerstable}>
        <>

          <thead>
            <tr>
              <th> Position</th>
              <th> Median Salary</th>
            </tr>
          </thead>
        
        </>
          <tbody>
            
        {salaries.map((salary) => (
          <>
              <tr>
              <td>{salary.position && (salary.position)} </td>
              <td>{salary.figure && (salary.figure)}</td>
            </tr>

          </>
        ))}
        </tbody>

    </table>
    </>
  );
};

export default PossibleSalary;
