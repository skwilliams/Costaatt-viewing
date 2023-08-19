import React from 'react';
import Head from 'next/head';
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import AdminStyles from '../../styles/Admissions.module.scss';
import CourseStyles from '../../styles/Course.module.scss';
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
      <HeaderNoImage caption="How to Pay " />
      <SideNavOnlyLayout>
        <p className={AdminStyles.sectiontextleft}> Fee Payment Options</p>
        <section id="beforepay" className={AdminStyles.sectionIntro}>
          <p className={AdminStyles.text}>
            {' '}
            <Image className={CourseStyles.icon} href={before} width="70" />
            Before you pay ensure you are in possesion of the following:
          </p>
          <div className={AdminStyles.entryreq}>
            <ul className={AdminStyles.list}>
              <li className={AdminStyles.items}>Your 8-digit student ID</li>
              <li className={AdminStyles.items}> Amount to be paid</li>
              <li className={AdminStyles.items}>
                {' '}
                Fee Code{' '}
                <span>
                  {' '}
                  <Link href="#" className={AdminStyles.emphasis}>
                    {' '}
                    Place link to pdf Fee Code here
                  </Link>{' '}
                </span>
              </li>
              <li className={AdminStyles.items}>
                Relevant term/semester code e.g.202410{' '}
              </li>
            </ul>
          </div>
        </section>
        <section id="visitcashier" className={AdminStyles.viewcashier}>
          <p className={AdminStyles.sectiontextleft}> Visit the Cashier</p>
        </section>

        <section id="personalonline" className={AdminStyles.payomline}>
          <p className={AdminStyles.sectiontextleft}> Personal Online</p>
        </section>
        <section id="interbank" className={AdminStyles.pay}>
          <p className={AdminStyles.sectiontextleft}> Inter Bank </p>
        </section>
        <section id="directdeposit" className={AdminStyles.pay}>
          <p className={AdminStyles.sectiontextleft}> Direct Deposit</p>
        </section>
        <section id="afterpay" className={AdminStyles.pay}>
          <p className={AdminStyles.sectiontextleft}> After you Pay</p>
          <p className={AdminStyles.text}>
            {' '}
            After you pay it's important that you do the following:
          </p>
          <div className={AdminStyles.entryreq}>
            <ul className={AdminStyles.list}>
              <li className={AdminStyles.items}>
                Retain a print/photograp/email of payment receipt
              </li>
              <li className={AdminStyles.items}>
                {' '}
                Send to{' '}
                <a href="mailto:bursar@costaatt.edu.tt">
                  {' '}
                  bursar@costaatt.edu.tt
                </a>
              </li>
              <li className={AdminStyles.items}>
                {' '}
                Check your student email for confirmation that the payment was
                received and processed{' '}
              </li>
            </ul>
          </div>
        </section>
      </SideNavOnlyLayout>
    </>
  );
};

howtopay.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default howtopay;
