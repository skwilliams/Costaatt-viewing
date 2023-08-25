import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import React from 'react'
import Head from 'next/head';
import AdmisStyles from "@/styles/Admissions.module.scss"
import SideNavOnlyLayout from '@/components/Layouts/SideNavOnly_NoTopOrDropdown';
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";

const howtoregister = () => {
    return (
      <>
        <Head>
          {" "}
          <title> How to register </title>
        </Head>
        <HeaderNoImage caption={"How to register"} />
        <SideNavOnlyLayout>
          <seciton id="advising" className={AdmisStyles.sectionAdvising}>
            <p className={AdmisStyles.sectiontext}>Academic Advisement</p>
            lorem
          </seciton>
          <section id="register" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontext}>Registration Process</p>
          </section>
          <section id="gate" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontext}>Gate Application</p>
          </section>
          <section id="payment" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontext}>Online Payment</p>
          </section>
          <section id="studentid" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontext}>Student Id</p>
          </section>
        </SideNavOnlyLayout>
      </>
    );
}
howtoregister.getLayout = function getLayout(page) {
    return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default howtoregister