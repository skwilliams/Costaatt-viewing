import React from "react";
import Head from "next/head";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import AdminStyles from "../../styles/Admissions.module.scss";
import CourseStyles from "../../styles/Course.module.scss";
import Image from "next/image";
import Link from "next/link";
import before from "../../../public/before.svg";
import after from "../../../public/after.svg";
import arrow from "../../../public/images/admissions/arrow.svg";

import locationicon from "../../../public/images/admissions/location.svg";
import downloadicon from "../../../public/images/admissions/downloadnoteicon.svg";
import SideNavWithTopNav_NoDropdown from "@/components/Layouts/SideNavWithTopNav_NoDropdown";
import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";

const howtopay = () => {
  return (
    <>
      <Head>
        <title> Fee Payment Options </title>
      </Head>
      <HeaderNoImage caption="How to Pay " />
      <SideNavOnlyLayout>
        <p className={AdminStyles.sectiontextleft}> Fee Payment Options</p>
        <section id="beforepay" className={AdminStyles.sectionBeforepay}>
          <p className={AdminStyles.sectiontextleft}> Before you Pay</p>
          <div className={AdminStyles.feetwoColCon}>
            <div className={AdminStyles.feetwoColGrid}>
              <Image
                className={AdminStyles.icon}
                src={before}
                alt="before icon"
              />
            </div>
            <div className={AdminStyles.feetwoColGrid}>
              <div className={AdminStyles.text}>
                {" "}
                {/* <Image className={CourseStyles.icon} href={before} width="70" /> */}
              </div>
              <div className={AdminStyles.feesreq}>
                <ul className={AdminStyles.feeslist}>
                  <p className={AdminStyles.howtoemphasis}>
                    {" "}
                    Before you pay ensure you are in possesion of the following:{" "}
                  </p>
                  <li className={AdminStyles.feesitems}>
                    Your 8-digit student ID
                  </li>
                  <li className={AdminStyles.feesitems}> Amount to be paid</li>
                  <li className={AdminStyles.feesitems}>
                    {" "}
                    Fee Code{" "}
                    <span>
                      {" "}
                      <a className={AdminStyles.linkingto} href="#">
                        {" "}
                        lookup codes here{" "}
                      </a>{" "}
                    </span>
                  </li>
                  <li className={AdminStyles.feesitems}>
                    Relevant term/semester code e.g.202410{" "}
                  </li>
                </ul>
              </div>{" "}
              {/*end of lisiting */}
            </div>{" "}
            {/*end of second col */}
          </div>{" "}
          {/*end of container */}
        </section>
        <section id="visitcashier" className={AdminStyles.sectionViewcashier}>
          <p className={AdminStyles.sectiontextleft}> Visit the Cashier</p>
          <div className={AdminStyles.feetwoColCon}>
            <div className={AdminStyles.feetwoColGrid}>
              <p className={AdminStyles.number}>1</p>
            </div>
            <div className={AdminStyles.feetwoColGrid}>
              <div className={AdminStyles.text}> </div>
              <div className={AdminStyles.feesreq}>
                <ul className={AdminStyles.feeslist}>
                  <p className={AdminStyles.howtoemphasis}>
                    {" "}
                    Cashiers are located our main campuses for your conveience
                    <br />
                    Opening hours of 8:00 a.m. to 4:00 p.m.
                  </p>
                  <li className={AdminStyles.feesitems}>
                    <span>
                      {" "}
                      <Link href="#" className={AdminStyles.emphasis}>
                        {" "}
                        <Image
                          className={AdminStyles.downloadicon}
                          src={locationicon}
                          alt="location icon"
                        />{" "}
                      </Link>{" "}
                    </span>{" "}
                    Chagauans Campus
                  </li>
                  <li className={AdminStyles.feesitems}>
                    <span>
                      {" "}
                      <Link href="#" className={AdminStyles.emphasis}>
                        {" "}
                        <Image
                          className={AdminStyles.downloadicon}
                          src={locationicon}
                          alt="location icon"
                        />{" "}
                      </Link>{" "}
                    </span>
                    City Campus
                  </li>

                  <li className={AdminStyles.feesitems}>
                    {" "}
                    <span>
                      {" "}
                      <Link href="#" className={AdminStyles.emphasis}>
                        {" "}
                        <Image
                          className={AdminStyles.downloadicon}
                          src={locationicon}
                          alt="location icon"
                        />{" "}
                      </Link>{" "}
                    </span>
                    South Campus{" "}
                  </li>
                  <li className={AdminStyles.feesitems}>
                    {" "}
                    <Link href="#" className={AdminStyles.emphasis}>
                      {" "}
                      <Image
                        className={AdminStyles.downloadicon}
                        src={locationicon}
                        alt="location icon"
                      />{" "}
                    </Link>{" "}
                    Tobago Campus
                    {/* <span> */} {/* </span>{" "} */}
                  </li>
                </ul>
              </div>{" "}
              {/*end of lisiting */}
            </div>{" "}
            {/*end of second col */}
          </div>{" "}
        </section>
        <section id="banneronline" className={AdminStyles.sectionPayonline}>
          <p className={AdminStyles.sectiontextleft}>
            {" "}
            Banner Online Payment
            <span className={AdminStyles.downloads}>
              <Image
                className={AdminStyles.downloadicon}
                src={downloadicon}
                alt="download icon"
              />
              {"        "}
              {/* <br /> */}
              <Link href="#" className={AdminStyles.downloadsDoc}>
                {" "}
                Banner Online Payment Manual
              </Link>{" "}
            </span>
          </p>
          <div className={AdminStyles.feetwoColCon}>
            <div className={AdminStyles.feetwoColGrid}>
              <p className={AdminStyles.number}>2</p>
            </div>
            <div className={AdminStyles.feetwoColGrid}>
              <div className={AdminStyles.text}> </div>
              <div className={AdminStyles.feesreq}>
                <ul className={AdminStyles.feeslist}>
                  <p className={AdminStyles.howtoemphasis}>
                    {" "}
                    *Confirm with your bank if your debit card can be used for
                    payments online and your daily limit allowed
                  </p>
                  <li className={AdminStyles.feesitems}>
                    Login to{" "}
                    <a className={AdminStyles.linkingto} href="#">
                      {" "}
                      Self Service Banner
                    </a>
                  </li>
                  <li className={AdminStyles.feesitems}>
                    Go to the Student tab and select Student & Financial Aid
                    <Image
                      // className={AdminStyles.downloadicon}
                      src={arrow}
                      alt="download icon"
                    />
                    Online Payment
                    <Image
                      // className={AdminStyles.downloadicon}
                      src={arrow}
                      alt="download icon"
                    />
                    COSTAATT Student Account Suite
                  </li>

                  <li className={AdminStyles.feesitems}>
                    {" "}
                    Using your credit card or VISA debit card* select the items
                    to be paid for and checkout
                  </li>
                </ul>
              </div>{" "}
              {/*end of lisiting */}
            </div>{" "}
            {/*end of second col */}
          </div>{" "}
        </section>
        <section
          id="personalonline"
          className={AdminStyles.sectionPaypersonalonline}
        >
          <p className={AdminStyles.sectiontextleft}>
            {" "}
            Personal Online Banking
            <span className={AdminStyles.downloads}>
              <Image
                className={AdminStyles.downloadicon}
                src={downloadicon}
                alt="download icon"
              />
              {"        "}
              {/* <br /> */}
              <Link href="#" className={AdminStyles.downloadsDoc}>
                {" "}
                FCB Manual{" "}
              </Link>{" "}
              <Link href="#" className={AdminStyles.downloadsDoc}>
                {" "}
                RBL Manual{" "}
              </Link>{" "}
            </span>
          </p>
          <div className={AdminStyles.feetwoColCon}>
            <div className={AdminStyles.feetwoColGrid}>
              <p className={AdminStyles.number}>3</p>
            </div>
            <div className={AdminStyles.feetwoColGrid}>
              <div className={AdminStyles.emphasis}>
                {" "}
                ** FCB and RBL Banks Only
              </div>
              <div className={AdminStyles.feesreq}>
                <ul className={AdminStyles.feeslist}>
                  <li className={AdminStyles.feesitems}>
                    Login to your personal online banking
                  </li>
                  <li className={AdminStyles.feesitems}>
                    Add COSTAATT as a payee
                  </li>

                  <li className={AdminStyles.feesitems}>
                    {" "}
                    Include in your payment description your student ID, then
                    type of fee you are paying and the relevant term/semsester{" "}
                  </li>
                </ul>
              </div>{" "}
              {/*end of lisiting */}
            </div>{" "}
            {/*end of second col */}
          </div>{" "}
        </section>
        <section id="interbank" className={AdminStyles.sectionInterbank}>
          <p className={AdminStyles.sectiontextleft}> Inter Bank </p>
          <div className={AdminStyles.feetwoColCon}>
            <div className={AdminStyles.feetwoColGrid}>
              <p className={AdminStyles.number}>4</p>
            </div>
            <div className={AdminStyles.feetwoColGrid}>
              <div className={AdminStyles.text}> </div>
              <div className={AdminStyles.feesreq}>
                <ul className={AdminStyles.feeslist}>
                  <p className={AdminStyles.howtoemphasis}>
                    {" "}
                    *Confirm with your bank if your debit card can be used for
                    payments online and your daily limit allowed
                  </p>
                  <li className={AdminStyles.feesitems}>
                    Login to{" "}
                    <a className={AdminStyles.linkingto} href="#">
                      {" "}
                      Self Service Banner
                    </a>
                  </li>
                  <li className={AdminStyles.feesitems}>
                    Go to the Student tab and select Student & Financial Aid
                    <Image
                      // className={AdminStyles.downloadicon}
                      src={arrow}
                      alt="download icon"
                    />
                    Online Payment
                    <Image
                      // className={AdminStyles.downloadicon}
                      src={arrow}
                      alt="download icon"
                    />
                    COSTAATT Student Account Suite
                  </li>

                  <li className={AdminStyles.feesitems}>
                    {" "}
                    Using your credit card or VISA debit card* select the items
                    to be paid for and checkout
                  </li>
                </ul>
              </div>{" "}
              {/*end of lisiting */}
            </div>{" "}
            {/*end of second col */}
          </div>{" "}
        </section>
        <section
          id="directdeposit"
          className={AdminStyles.sectionDirectdeposit}
        >
          <p className={AdminStyles.sectiontextleft}> Direct Deposit</p>
          <div className={AdminStyles.feetwoColCon}>
            <div className={AdminStyles.feetwoColGrid}>
              <p className={AdminStyles.number}>5</p>
            </div>
            <div className={AdminStyles.feetwoColGrid}>
              <div className={AdminStyles.text}> </div>
              <div className={AdminStyles.feesreq}>
                <ul className={AdminStyles.feeslist}>
                  <p className={AdminStyles.howtoemphasis}>
                    {" "}
                    *Confirm with your bank if your debit card can be used for
                    payments online and your daily limit allowed
                  </p>
                  <li className={AdminStyles.feesitems}>
                    Login to{" "}
                    <a className={AdminStyles.linkingto} href="#">
                      {" "}
                      Self Service Banner
                    </a>
                  </li>
                  <li className={AdminStyles.feesitems}>
                    Go to the Student tab and select Student & Financial Aid
                    <Image
                      // className={AdminStyles.downloadicon}
                      src={arrow}
                      alt="download icon"
                    />
                    Online Payment
                    <Image
                      // className={AdminStyles.downloadicon}
                      src={arrow}
                      alt="download icon"
                    />
                    COSTAATT Student Account Suite
                  </li>

                  <li className={AdminStyles.feesitems}>
                    {" "}
                    Using your credit card or VISA debit card* select the items
                    to be paid for and checkout
                  </li>
                </ul>
              </div>{" "}
              {/*end of lisiting */}
            </div>{" "}
            {/*end of second col */}
          </div>{" "}
        </section>
        <section id="afterpay" className={AdminStyles.sectionAfterpay}>
          <p className={AdminStyles.sectiontextleft}> After you Pay</p>
          <div className={AdminStyles.feetwoColCon}>
            <div className={AdminStyles.feetwoColGrid}>
              <Image
                className={AdminStyles.icon}
                src={after}
                alt="after icon"
              />{" "}
            </div>
            <div className={AdminStyles.feetwoColGrid}>
              <div className={AdminStyles.text}>
                {" "}
                {/* <Image className={CourseStyles.icon} href={before} width="70" /> */}
              </div>
              <div className={AdminStyles.feesreq}>
                <ul className={AdminStyles.feeslist}>
                  <p className={AdminStyles.howtoemphasis}></p>
                  <li className={AdminStyles.feesitems}>
                    Retain a print/photograph/email of payment receipt{" "}
                  </li>
                  <li className={AdminStyles.feesitems}>
                    {" "}
                    Send to <a href="main"> </a>
                  </li>
                  <li className={AdminStyles.feesitems}>
                    {" "}
                    Fee Code{" "}
                    <span>
                      {" "}
                      <a className={AdminStyles.linkingto} href="#">
                        {" "}
                        lookup codes here{" "}
                      </a>{" "}
                    </span>
                  </li>
                  <li className={AdminStyles.feesitems}>
                    Relevant term/semester code e.g.202410{" "}
                  </li>
                </ul>
              </div>{" "}
              {/*end of lisiting */}
            </div>{" "}
            {/*end of second col */}
          </div>{" "}
        </section>
      </SideNavOnlyLayout>
    </>
  );
};

howtopay.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default howtopay;
