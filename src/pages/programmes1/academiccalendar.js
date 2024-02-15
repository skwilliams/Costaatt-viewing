import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";
import React from "react";
import Head from "next/head";
import ProgStyles from "../../styles/Programmes.module.scss";
import Layout1 from "../../components/Layouts/TopNavOnly_NoDropdown";

const academiccalendar = () => {
  return (
    <>
      <Head>
        {" "}
        <title> Academic Calendar</title>
      </Head>
      <HeaderNoImage caption="Academic Calendar" />
      <section id="high" className={ProgStyles.sectionacademiccalendar}>
        <div className="u-margin-bottom-small">
          <table className={ProgStyles.academiccalendar}>
            <thead>
              <tr>
                <th>
                  Activity <br /> Semester 1-202410
                </th>
                <th>
                  Date <br /> September 11, 2023 - Janauary 15,2024
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Advisement -{" "}
                  <span style={{ color: "orangered" }}>
                    {" "}
                    Continuing and New Students{" "}
                  </span>
                </td>
                <td>June 12, 2023 - August 25, 2023</td>
              </tr>
              <tr>
                <td>
                  Registration -{" "}
                  <span style={{ color: "orangered" }}>
                    {" "}
                    Continuing Students{" "}
                  </span>{" "}
                </td>
                <td>August 14, 2023 - August 25, 2023 </td>
              </tr>
              <tr>
                <td>
                  Registration -{" "}
                  <span style={{ color: "orangered" }}> New Students </span>
                </td>
                <td>August 21, 2023 - August 25, 2023</td>
              </tr>
              <tr>
                <td>
                  Orientation -
                  <span style={{ color: "orangered" }}>
                    {" "}
                    <b>New Students</b>{" "}
                  </span>{" "}
                </td>
                <td>August 21, 2023 - August 25, 2023</td>
              </tr>

              <tr>
                <td>SEMESTER/SESSION BEGINS</td>
                <td>August 28, 2023</td>
              </tr>
              <tr>
                <td>Graduation Application Deadline</td>
                <td>TBA</td>
              </tr>

              <tr>
                <td>Dropping/Adding Courses Deadline</td>
                <td>September 10, 2023 (midnight)</td>
              </tr>
              <tr>
                <td>Withdrawal Period -"W" Grade Assigned. </td>
                <td>September 11, 2023 - September 22, 2023</td>
              </tr>
              <tr>
                <td>Fee Paynment Deadline </td>
                <td>September 28, 2023 (midnight)</td>
              </tr>
              <tr>
                <td>GATE Application Deadline </td>
                <td>September 28, 2023 (midnight)</td>
              </tr>
              <tr>
                <td>Payment Plan Application Deadline</td>
                <td>September 28, 2023 (midnight)</td>
              </tr>
              <tr>
                <td>Late Fee Assigned($50.00)</td>
                <td>September 29, 2023 (after closing hours)</td>
              </tr>
              <tr>
                <td>Financial Hold (FH) and GATE hold(GH) </td>
                <td>September 29, 2023 (after closing hours)</td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: "orangered" }}>
                    <b>Public Holidays </b>
                  </span>
                </td>
                <td>
                  <table className="publicholidays-table">
                    {/* <h4 align="center">Nested Table</h4> */}
                    <tbody>
                      <tr>
                        <td>Emancipation Day</td>
                        <td> August 1, 2023</td>
                      </tr>
                      <tr>
                        <td>Independence Day</td>
                        <td>August 31, 2023</td>
                      </tr>
                      <tr>
                        <td>Republic Day</td>
                        <td> September 24, 2023</td>
                      </tr>
                      <tr>
                        <td>Republic Day (given)</td>
                        <td>September 25, 2023</td>
                      </tr>
                      <tr>
                        <td> Divali</td>
                        <td> November 12, 2023</td>
                      </tr>
                      <tr>
                        <td>Divali (given)</td>
                        <td> November 12, 2023</td>
                      </tr>
                      <tr>
                        <td>Christmas Day</td>
                        <td>December 25, 2023</td>
                      </tr>
                      <tr>
                        <td>Boxing Day</td>
                        <td> December 26, 2023</td>
                      </tr>
                      <tr>
                        <td> New Year's Day</td>
                        <td> January 1, 2024 </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>COLLEGE CLOSED</td>
                <td>December 25, 2023 -January 1, 2024</td>
              </tr>
              <tr>
                <td>GRADUATION CEREMONY</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>Submission of “I” Grades DeadlineY</td>
                <td>November 24, 2023</td>
              </tr>
              <tr>
                <td>SEMESTER/SESSION ENDS</td>
                <td>November 26, 2023</td>
              </tr>
              <tr>
                <td>SEMESTER BREAK</td>
                <td>November 27 - December 3, 2023</td>
              </tr>
              <tr>
                <td>FINAL EXAMINATION PERIOD </td>
                <td>December 4, 2023 - December 17, 202323</td>
              </tr>
              <tr>
                <td>Submission of Grades Deadline</td>
                <td>December 31, 2023 (midnight)</td>
              </tr>
              <tr>
                <td>FINAL EXAMINATION BACK-UP</td>
                <td>TBA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
academiccalendar.getLayout = function getLayout(page) {
  return <Layout1>{page}</Layout1>;
};
export default academiccalendar;
