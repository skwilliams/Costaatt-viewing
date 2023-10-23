import React from 'react'
import Head from 'next/head'
import HeadImage from '@/components/PageComponents/HeadImage'
import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import standardStyles from '@/styles/main.module.scss'
import costlifeStyles from "@/styles/CostaattLife.module.scss";
import AdmisStyles from "@/styles/Admissions.module.scss"
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage'
import Image from 'next/image';
import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import counsellor from "../../../public/images/admissions/contact.svg";


import Accordion from "@mui/material/Accordion";
import ProgStyles from '@/styles/Programmes.module.scss'
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const library = () => {
  return (
    <>
      <Head>
        {" "}
        <title> Library </title>{" "}
      </Head>
      <HeaderNoImage caption="Library Services" />

      <SideNavOnlyLayout>
        <section id="accesslib" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            <span> Accessing </span>LIBRARY Services
          </h2>

          <p className={standardStyles.paragraph}>
            Libraries at the College's campuses and learning centres have a
            combined book collection of more than 50,000 volumes.
          </p>
          <h3 className={standardStyles.headingPrimarysub}>Registration</h3>

          <p className={standardStyles.paragraph}>
            The institutional ID card must be presented for registration and all
            library transactions. Pre-register online only if applying for the
            first time.
          </p>
          <h3 className={standardStyles.headingPrimarySub}>Loans</h3>
          <p className={standardStyles.paragraph}>
            Users, depending on the patron group to which they belong, have been
            allocated a maximum number of items, which they may have on loan at
            any one time.
          </p>
          <Accordion sx={{ my: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                color="rgb{41,42,40}"
                fontWeight="bold"
                fontSize={"1.15rem"}
              >
                Maximum Number of Items based on Patron Group
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <table className={ProgStyles.academiccalendar}>
                <thead>
                  <tr>
                    <th>Patron Group</th>
                    <th>Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>All</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Adjunt Faculty</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Alumni</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Faculty</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>
                      Inter-Library Loan-Campus
                      <>
                        <br />
                        <i>
                          {" "}
                          These are loans between campuses, the borrowing campus
                          will charge the book using the rules of the
                          Circulation Matrix
                        </i>
                      </>
                    </td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>
                      Non-Academic Staff
                      <br />
                      <i> Clerical Administrative and Manipulative staff</i>
                    </td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>
                      Part-time Faculty
                      <>
                        <br />
                        <i> as distinct from Adjunct faculty</i>
                      </>
                    </td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>President / Vice President</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Student</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>Student Assistant/Teacher Assistant</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Technical / Professional Staff</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
            </AccordionDetails>
          </Accordion>

          <>
            <h3 className={standardStyles.headingPrimarysub}>
              <span> FEES</span> & Fines{" "}
            </h3>
            <p>
              {" "}
              Users, All users, except persons who fall within specific patron
              groups, are required to pay fines for overdue items.
            </p>
          </>
          <Accordion sx={{ my: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                color="rgb{41,42,40}"
                fontWeight="bold"
                fontSize={"1.15rem"}
              >
                Fees and Fines{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <table className={ProgStyles.academiccalendar}>
                <thead>
                  <tr>
                    <td>Fee Description</td>
                    <td>Amount </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Lost Item Processing
                      <br /> Lost Item Replacement
                    </td>
                    <td className="cost">$30 </td>
                  </tr>
                  <tr>
                    <td> Overdue (General Collection)</td>
                    <td>$1.00 per day </td>
                  </tr>
                  <tr>
                    <td>Overdue (Short Loan)</td>
                    <td>$1.00 per hour</td>
                  </tr>
                  <tr>
                    <td>Overdue (Laptop)</td>
                    <td>
                      $20.00 per hour
                      <br /> Or part thereof if failed to return on time at
                      Circulation Desk
                    </td>
                  </tr>
                  <tr>
                    <td>Photocopying(Self-Service)</td>
                    <td>$0.10 per page</td>
                  </tr>
                </tbody>
              </table>
            </AccordionDetails>
          </Accordion>

          <p className={standardStyles.paragraph}></p>
        </section>

        <section id="elearn" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            <span> eLearning </span>RESOURCES
          </h2>
          <>
            <p className={standardStyles.paragraph}>
              The COSTAATT libraries' electronic resources network includes an
              online catalogue (COSPAC), access to over 21,000 full text
              journals from EBSCOHost as well as a small collection of 198
              e-books.
            </p>
            <p className={standardStyles.paragraph}>
              Registered users can access the EBSCO databases 24 hours per day,
              seven days per week from any computer that has an internet
              connection.
            </p>
            <p className={standardStyles.paragraph}>
              The online catalogue, COSPAC, provides easy access to the
              collections. All new students are required to attend a library
              orientation session during orientation week and must consult the
              Library Services Guide for information on circulation and reserve
              materials
            </p>

            <div className={standardStyles.row}>
              <div className={standardStyles.col1of2}>
                <button
                  className={`${standardStyles.btn} ${standardStyles.btn__selecthome}`}
                  href="#"
                >
                  COSPAC Library Search
                </button>
              </div>
              <div className={standardStyles.col1of2}>
                <button
                  href="#"
                  className={`${standardStyles.btn} ${standardStyles.btn__selecthome}`}
                >
                  EBSCO Discovery Service
                </button>
              </div>
            </div>
          </>
        </section>

        <section id="guidelines" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            GENERAL <span>Guidelines</span>
          </h2>
          <p className={standardStyles.paragraph}>
            Students must be mindful that the library is provided for the
            purpose of academic study and research. Any conduct that is
            inconsistent with this purpose or prevents others from the pursuit
            of this purpose constitutes a breach of the library's rules.
          </p>
          <Accordion sx={{ my: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                color="rgb{41,42,40}"
                fontWeight="bold"
                fontSize={"1.15rem"}
              >
                Library Guidelines
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={standardStyles.bullet}>
                <ul>
                  <li>
                    {" "}
                    Eating, drinking and smoking are NOT allowed in the library.
                  </li>
                  <li>
                    Mobile phones should be kept on silent and all phone calls
                    should be conducted outside the library.
                  </li>
                  <li>
                    All bags, briefcases, handbags, parcels or other receptacles
                    are to be left in the lockers provided in the walkway
                    between Floor 1 and the cafeteria. These lockers are for
                    library use only
                  </li>
                  <li>
                    Students must meet acceptable levels of personal hygiene, in
                    the interests of maintaining a healthy environment for
                    everyone using Library facilities.
                  </li>
                  <li>
                    Laptop computers (on battery power) may be used in the
                    library or along the periphery of the library.
                  </li>
                  <li>
                    Students MUST show all books, folders and papers in their
                    possession to the Library Security on duty when leaving the
                    library, whether or not the items belong to the library.
                  </li>
                  <li>
                    Students are not allowed to remove library materials from
                    the library unless they have been legitimately charged out
                    on loan at the Circulation Desk. Attempts to do so would be
                    considered theft and treated accordingly.
                  </li>
                  <li>
                    The wilful damage of library property, including writing on
                    furniture, cutting/ tearing articles out of books, magazines
                    and newspapers are considered acts of vandalism. Any student
                    found committing such acts will be disbarred from the use of
                    the library
                  </li>
                  <li>
                    All library users must be prepared to present the
                    appropriate identification cards entitling them to use the
                    library when asked to do so by library or security staff.
                  </li>
                  <li>
                    Library users wishing to take photographs or make films in a
                    COSTAATT Library must seek permission from the Campus
                    Librarian or Library Director{" "}
                  </li>
                  <span className={standardStyles.footnote}>
                    <i>
                      Due to limited seating capacity, the library does not
                      accommodate group study.
                    </i>
                  </span>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        </section>

        <section id="borrow" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            Borrowing <span>MATERIALS</span>
          </h2>
          <div className={standardStyles.bullet}>
            <ul>
              <li>All borrowers must be registered with the library.</li>
              <li>
                All loans must be returned on the due date otherwise overdue
                fines will be incurred.{" "}
              </li>
              <li>
                {" "}
                Students may use the book deposit at the Circulation Desk
                instead of waiting in line to return items, and/ place items in
                the Book Return outside the library after library closing hours.
              </li>
              <li>
                Students MUST collect a discharge slip for any item returned no
                later than the day after the item was deposited for return. This
                slip will be the only proof of return accepted by the library in
                instances where items are “claimed returned” by borrowers.
              </li>
              <li>
                {" "}
                Students MUST show their student identification cards or proof
                of registration in order to borrow library materials.
              </li>
              <p className="foot">
                <i>
                  COSTAATT LIBRARY SERVICES is not liable for any personal
                  property left in the lockers or left unattended by patrons in
                  the library.
                </i>
              </p>
            </ul>
          </div>
        </section>

        <section
          id="usage"
          className={`${standardStyles.sectionWithSideNav} ${standardStyles.sectionbackColor}`}
        >
          <h2 className={standardStyles.newsHeading}>
            Computer <span>USAGE</span>
          </h2>

          <p className={standardStyles.paragraph}>
            {" "}
            Computers and Laptops are to be used for the following:
          </p>

          <div className={standardStyles.bullet}>
            <ul className="guideitems">
              <li>Support of instructional activities.</li>
              <li>Support of independent study and research </li>
              <li> Search for educational information on the Internet</li>
              <li>Search of COSPAC and online databases</li>

              <p className={standardStyles.footnote}>
                <i>
                  Computer group projects MUST be done in the computer
                  laboratories and NOT in the library.
                  <br />
                  Library laptops are only to be used in the library.
                </i>
              </p>
            </ul>
          </div>
        </section>
        <section id="opening" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            {" "}
            Opening <span> HOURS </span>{" "}
          </h2>

          <>
            <div className={standardStyles.row}>
              <div className={standardStyles.col1of4}>
                <h3 className={costlifeStyles.opening__campus}>
                  <span> Chaguanas Campus </span>
                </h3>
                <br />
                <p className={costlifeStyles.opening__location}>
                  Pierre Road Connector Chaguanas
                </p>
                <div className={standardStyles.marginBottomSmall}>
                  <span className={costlifeStyles.opening__time}>
                    Monday to Friday <br />
                    8:00 a.m. to 5:00 p.m.{" "}
                  </span>
                  <br />
                  <span className={costlifeStyles.opening__semester}>
                    {" "}
                    <br /> Semseter 1 & 11{" "}
                  </span>
                </div>
              </div>

              <div className={standardStyles.col1of4}>
                <h3 className={costlifeStyles.opening__campus}>
                  <span> City Campus </span>
                </h3>

                <p className={costlifeStyles.opening__location}>
                  9-11 Melville Lane <br />
                  Port of Spain
                </p>
                <div>
                  <span className={costlifeStyles.opening__time}>
                    Monday to Friday <br />
                    8:00 a.m. to 5:00 p.m.{" "}
                  </span>
                  <br />
                  <span className={costlifeStyles.opening__semester}>
                    {" "}
                    <br /> Semseter 1 & 11{" "}
                  </span>
                </div>
                <br />
              </div>
              <div className={standardStyles.col1of4}>
                <h3 className={costlifeStyles.opening__campus}>
                  <span> South Campus </span>
                </h3>

                <p className={costlifeStyles.opening__location}>
                  40-44 Sutton Street <br />
                  San Fernando{" "}
                </p>
                <div>
                  <span className={costlifeStyles.opening__time}>
                    Monday to Friday <br />
                    8:00 a.m. to 5:00 p.m.{" "}
                  </span>
                  <br />
                  <span className={costlifeStyles.opening__semester}>
                    {" "}
                    <br /> Semseter 1 & 11{" "}
                  </span>
                  <br />
                </div>
              </div>
              <div className={standardStyles.col1of4}>
                <div>
                  <h3 className={costlifeStyles.opening__campus}>
                    <span> Tobago Campus </span>
                  </h3>

                  <p className={costlifeStyles.opening__location}>
                    Port Mall 3rd Level,
                    <br />
                    Corner Sangster Hill and Milford Road
                    <br />
                    Scarborough
                  </p>
                  <div>
                    <span className={costlifeStyles.opening__time}>
                      Monday to Friday <br />
                      8:00 a.m. to 4:00 p.m.{" "}
                    </span>
                    <br />
                    <span className={costlifeStyles.opening__semester}>
                      {" "}
                      <br /> Semseter 1 & 11{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/*end of row*/}
          </>
        </section>

        <section
          id="contact"
          className={`${standardStyles.sectionWithSideNav} ${standardStyles.sectionbackColor}`}
        >
          <h2 className={standardStyles.newsHeading}>
            {" "}
            <span> CONTACT</span> Library
          </h2>
          <div className={standardStyles.row}>
            <div className={standardStyles.col1of3}>
              <h3 className={costlifeStyles.opening__campus}>
                <span> Chaguanas Campus </span>
              </h3>

              <div className={costlifeStyles.opening__contact}>
                <Image
                  className={AdmisStyles.icon}
                  src={telephone}
                  alt="telephone icon"
                />
                <p className={AdmisStyles.iconfont}> 625-5030 ext 5811,5815 </p>
              </div>
            </div>

            <div className={standardStyles.col1of3}>
              <h3 className={costlifeStyles.opening__campus}>
                <span> City Campus </span>
              </h3>

              <br />
              <div className={costlifeStyles.opening__contact}>
                <Image
                  className={AdmisStyles.icon}
                  src={telephone}
                  alt="telephone icon"
                />
                <p className={AdmisStyles.iconfont}> 625-5030 ext 5120,5121 </p>
              </div>
            </div>
            <div className={standardStyles.col1of3}>
              <h3 className={costlifeStyles.opening__campus}>
                <span> South Campus </span>
              </h3>

              <div className={costlifeStyles.opening__contact}>
                <Image
                  className={AdmisStyles.icon}
                  src={telephone}
                  alt="telephone icon"
                />
                <p className={AdmisStyles.iconfont}> 625-5030 ext 5773 </p>
              </div>
            </div>
          </div>{" "}
          {/*close row */}
          <div className={standardStyles.row}>
            <div className={standardStyles.col2of3}>
              <h3 className={costlifeStyles.opening__campus}>
                <span> Library Email </span>
              </h3>

              <div>
                <Image
                  className={AdmisStyles.icon}
                  src={email}
                  alt="email icon"
                />
                <p className={AdmisStyles.iconfont}>
                  {" "}
                  <a href="mailto:asklibrary@costaatt.edu.tt">
                    {" "}
                    asklibrary@costaatt.edu.tt{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </SideNavOnlyLayout>
    </>
  );
}

        library.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};
        export default library