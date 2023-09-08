import React from 'react';
import CourseStyle from '@/styles/Course.module.scss';

const SupportDoc = ({ docs }) => {
  return (
    <>
      <div className={CourseStyle.fiveColGridCon}>
        <>
          <div className={CourseStyle.fiveColGrid}>
            <div className={CourseStyle.tableheadings}>Nationality</div>
          </div>
          <div className={CourseStyle.fiveColGrid}>
            <div className={CourseStyle.tableheadings}>Valid TT ID Card</div>
          </div>
          <div className={CourseStyle.fiveColGrid}>
            <div className={CourseStyle.tableheadings}>Valid Passport</div>
          </div>
          <div className={CourseStyle.fiveColGrid}>
            <div className={CourseStyle.tableheadings}>Birth Certificate</div>
          </div>
          <div className={CourseStyle.fiveColGrid}>
            <div className={CourseStyle.tableheadings}>
              Academic Certificate
            </div>
          </div>
        </>
        {docs.map((doc, ind) => (
          <div key={ind}>
            <div className={CourseStyle.fiveColGrid}>
              {doc.nationality && (
                <div className={CourseStyle.coursecode}>{doc.nationality}</div>
              )}
            </div>

            <div className={CourseStyle.fiveColGrid}>
              {doc.id && <div className={CourseStyle.credits}>{doc.id}</div>}
            </div>

            <div className={CourseStyle.fiveColGrid}>
              {doc.passport && (
                <div className={CourseStyle.credits}>{doc.passport}</div>
              )}
            </div>
            <div className={CourseStyle.fiveColGrid}>
              {doc.birthCert && (
                <div className={CourseStyle.credits}>{doc.birthCert}</div>
              )}
            </div>
            <div className={CourseStyle.fiveColGrid}>
              {doc.academicCert && (
                <div className={CourseStyle.credits}>{doc.academicCert}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SupportDoc;
