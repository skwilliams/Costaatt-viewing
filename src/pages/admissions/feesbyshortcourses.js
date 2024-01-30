import React from 'react';
import admissionStyles from '../../styles/Admissions.module.scss';

// import Button from "@/components/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
 communication,
  independent,
  advertising,
  film,
  it,
  journalism,
} from "../../../src/pages/programmes/shortcoursedata" 

"../admissions/shortcoursesdata";

import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import FeesShortCourses from '@/components/PageWithSideNavComponents/FeesShortCourses';
const feesandfunding = () => {
  return (
    <>
      <HeaderNoImage caption="Short Courses Fees" />

      <div className={admissionStyles.applicationInstructions}>
        <section>
          <h1>SHORT COURSES</h1> <p>&nbsp;</p>
          <p>
            <strong>
              IMPORTANT NOTE: Fees listed in the tables below are estimates ONLY
            </strong>
            and should be used as guidance. They do not include charges for
            developmental or repeated courses.
            <br /> All fees listed are in Trinidad and Tobago dollars (TTD)
          </p>
          <p>&nbsp;</p>
          <div>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">
                  Advertising and Social Media{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={advertising} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">Communication Skills </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={communication} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">Film and Production </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={film} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">
                  Information Technology and Computer Skills{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={it} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">
                  Journalism and Public Relations{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={journalism} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">Mathematics </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={advertising} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">
                  Management and Entrepreneurship{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={advertising} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">
                  Psychology and Social Work{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={advertising} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">
                  Special Needs Education{" "}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={advertising} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">Toursim </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FeesShortCourses area={independent} />
              </AccordionDetails>
            </Accordion>
          </div>
          <br />
        </section>
        <section>
          <div>
            <h1>METHOD OF PAYMENT</h1>
            <p>The College accepts the following methods of payment:</p>
            <ul>
              <li> Cash </li>
              <li>LINX</li>
              <li>Visa/Master card </li>
              <li>Certified/Manager&#39;s cheque</li>
            </ul>
            <p>
              Institutional fees are non-refundable. Students who officially
              withdraw from the College may be eligible for a refund of tuition
              fees in accordance with the schedule outlined in the Academic
              Calendar. Please note that students in receipt of GATE funding are
              not eligible for tuition refunds.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default feesandfunding;
