import React from 'react';
import Head from 'next/head';
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import AdminStyles from '../../styles/Admissions.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import before from '../../../public/before.svg';
import after from '../../../public/after.svg';
import arrow from '../../../public/images/admissions/arrow.svg';

import locationicon from '../../../public/images/admissions/location.svg';
import downloadicon from '../../../public/images/admissions/downloadnoteicon.svg';
import SideNavOnlyLayout from '@/components/Layouts/SideNavOnly_NoTopOrDropdown';
import TopNavOnlyLayout from '@/components/Layouts/TopNavOnly_NoDropdown';


const howtopay = () => {
  return (
    <>
      <Head>
        <title> Fee Payment Options </title>
      </Head>
      <HeaderNoImage caption="Fee Payment Options " />
      <SideNavOnlyLayout>
        {/* <p className={AdminStyles.sectiontextleft}> Fee Payment Options</p> */}
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
                      <a className={AdminStyles.linkingto} Link href="/pdfs/COSTAATT Fee Payment Codes.pdf" target="_blank">
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
                     <Link href="https://www.google.com/maps/place/College+of+Science+Technology+and+Applied+Arts+of+Trinidad+and+Tobago+(COSTAATT)+Main+Campus/@10.5273869,-61.4196525,17z/data=!3m1!4b1!4m6!3m5!1s0x8c35f962948039e7:0xbf1279a6112a80cc!8m2!3d10.5273869!4d-61.4196525!16s%2Fg%2F11c1nzhxtp?entry=ttu" target="_blank"className={AdminStyles.emphasis}>
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
                      <Link href="https://www.google.com/maps/place/COSTAATT+City+Campus/@10.664234,-61.5270438,15z/data=!4m6!3m5!1s0x8c36080a0f804a1b:0x421ba1314a880816!8m2!3d10.6618488!4d-61.5141055!16s%2Fg%2F12xqj0dk0?entry=ttu"target="_blank" className={AdminStyles.emphasis}>
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
                      <Link href="https://www.google.com/maps/place/COSTAATT+South+Campus/@10.275326,-61.4637744,17z/data=!3m1!4b1!4m6!3m5!1s0x8c358c55a11f48d1:0x2c91fc2fc1ff9a51!8m2!3d10.275326!4d-61.4637744!16s%2Fg%2F1ptwgn_vh?entry=ttu" target="_blank"className={AdminStyles.emphasis}>
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
                    <Link href="https://www.google.com/maps/place/COSTAATT-moved+to+the+Portmall,+Scarborough/@11.1915898,-60.7405329,17z/data=!3m1!4b1!4m6!3m5!1s0x8c49ad146b86f161:0x123c10314eab27f9!8m2!3d11.1915898!4d-60.7405329!16s%2Fg%2F1jkwp69tg?entry=ttu"target="_blank" className={AdminStyles.emphasis}>
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
              <Link href="/pdfs/FINAL Online Payment Manual 15.08.18 v1.0.pdf" target="_blank" className={AdminStyles.downloadsDoc}>
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
                    <a className={AdminStyles.linkingto} href="https://ssb-prod.ec.costaatt.edu.tt/pls/PROD/twbkwbis.P_GenMenu?name=homepage" target="_blank">
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
              <Link href="/pdfs/COSTAATT Tuition and Fee Payment-First Citizens Bank Limited_v3.1 - 2505....pdf" target="_blank" className={AdminStyles.downloadsDoc}>
                {" "}
                FCB Manual{" "}
              </Link>{" "}
              <Link href="/pdfs/COSTAATT Tuition and Fee Payment-Republic Bank Limited_v1 updated August 2020.pdf" target="_blank"className={AdminStyles.downloadsDoc}>
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
          <p className={AdminStyles.sectiontextleft}>
            {" "}
            Inter-Bank Transfer Online{" "}
            <span className={AdminStyles.downloads}>
              <Image
                className={AdminStyles.downloadicon}
                src={downloadicon}
                alt="download icon"
              />
              {"        "}
              <Link href="/pdfs/Online Payment - User Manual July 2021.pdf" target="_blank" className={AdminStyles.downloadsDoc}>
                {" "}
                Payment Guide (Page 2){" "}
              </Link>{" "}
            </span>
          </p>
          <div className={AdminStyles.feetwoColCon}>
            <div className={AdminStyles.feetwoColGrid}>
              <p className={AdminStyles.number}>4</p>
            </div>
            <div className={AdminStyles.feetwoColGrid}>
              <div className={AdminStyles.text}> </div>
              <div className={AdminStyles.feesreq}>
                <ul className={AdminStyles.feeslist}>
                  {/* <p className={AdminStyles.howtoemphasis}>
                    {" "}
                    *Confirm with your bank if your debit card can be used for
                    payments online and your daily limit allowed
                  </p> */}
                  <li className={AdminStyles.feesitems}>
                    Login to your personal online banking
                  </li>
                  <li className={AdminStyles.feesitems}>
                    Select the relevant option to transfer funds
                  </li>

                  <li className={AdminStyles.feesitems}>
                    {" "}
                    The receiving bank ins First Citizens Bank, account number
                    1210236
                  </li>
                  <li className={AdminStyles.feesitems}>
                    {" "}
                    Include in your transfer/payment description your student
                    ID,the type of fee you are paying and the relevant
                    term/semester
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
          <p className={AdminStyles.sectiontextleft}>
            {" "}
            Direct Deposit at First Citizens Bank Branch
            <span className={AdminStyles.downloads}>
              <Image
                className={AdminStyles.downloadicon}
                src={downloadicon}
                alt="download icon"
              />
              {"        "}
              <Link href="/pdfs/Online Payment - User Manual July 2021.pdf" target="_blank" className={AdminStyles.downloadsDoc}>
                {" "}
                Payment Guide (Page 2){" "}
              </Link>{" "}
            </span>
          </p>
          <div className={AdminStyles.feetwoColCon}>
            <div className={AdminStyles.feetwoColGrid}>
              <p className={AdminStyles.number}>5</p>
            </div>
            <div className={AdminStyles.feetwoColGrid}>
              <div className={AdminStyles.text}> </div>
              <div className={AdminStyles.feesreq}>
                <ul className={AdminStyles.feeslist}>
                  <li className={AdminStyles.feesitems}>
                    Visit any First Citizens Bank branch
                  </li>
                  <li className={AdminStyles.feesitems}>
                    At teller, provide your name, COSTAATT's account number
                    (1210236), your student ID number, the type of fee you are
                    paying and the relevant term/semester{" "}
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
                    Send to{" "}
                    <a href="bursar@costaatt.edu.tt">
                      {" "}
                      bursar@costaatt.edu.tt{" "}
                    </a>
                  </li>
                  <li className={AdminStyles.feesitems}>
                    Check your student email for confirmation that the payemnt
                    was received and processed
                  </li>
                </ul>
              </div>{" "}
              {/*end of lisiting */}
            </div>{" "}
            {/*end of second col */}
          </div>{" "}
        </section>
        <section>
          <p className={AdminStyles.emphasis}>
            {" "}
            For payment queries, contact the Office of the Bursar
            bursar@costaatt.edu.tt
            <br/> NOTE: It is of extreme importance that all
            requested details be provided, for each payment to be processed on
            time. Missing or incorrect details result in delayed processing as
            the Bursar's office must confirm the payee's identity, payment type
            and relevant semester prior to posting the payment.
          </p>
        </section>
      </SideNavOnlyLayout>
    </>
  );
};

howtopay.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default howtopay;
