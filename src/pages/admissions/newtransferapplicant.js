import React from 'react'
import Head from 'next/head'
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage'
import Link from 'next/link'
import standardStyles from '@/styles/main.module.scss'
import SideNavOnlyLayout from '@/components/Layouts/SideNavOnly_NoTopOrDropdown'

const newtransferapplicant = () => {
  return (
    <>
      <Head>
        <title>New and Transfer Applicants</title>
      </Head>
      <HeaderNoImage caption="New and Transfer Applicants" />
      <p className={standardStyles.headingprimarysub}>
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/admissions">Admissions/</Link>
        <Link href="/admissions/howtoapply">How to Apply</Link>
      </p>
      <section>
        <p className={standardStyles.headingSecondary}>
          {" "}
          New and Transfer Applicant
        </p>
        <p className={standardStyles.paragraph}>
          First Time User If this is your first time submitting an online
          application, you must firstly create an account. To do so simply click
          on the “First time user account creation” link. If this is not your
          first time submitting and you have an existing account, enter the
          Login ID and PIN used previously. 
          </p>
          
        <p className={standardStyles.paragraph}>  To create your account, simply
          create a Login ID and PIN. Your Log In ID must consist of up to nine
          (9) characters and numbers while your PIN (personal identification
          number) must be six (6) numbers in length. Re-enter your PIN for
          confirmation. Important: Please choose a Login ID and PIN that you can
          easily remember should you need to return to complete your
          application.
          </p>
          <p className={standardStyles.paragraph}>
            Step 2: Fill-In All Relevant Information
          </p>{" "}
          <p className={standardStyles.paragraph}>
            Step 3: Terms, Conditions and Declaration Carefully read and agree
            to the terms and conditions which appear at the end of the
            application.
          </p>
          <p className={standardStyles.paragraph}>
            Step 4: Submit Application Confirmation Page and Supporting
            Documents Save the confirmation page as a PDF or JPEG document and
            submit it along with PDF or JPEG supporting documents to
            applications@costaatt.edu.tt.
          </p>
          <p className={standardStyles.paragraph}></p>
          <p className={standardStyles.paragraph}></p>
        
      </section>
    </>
  );
}

export default newtransferapplicant