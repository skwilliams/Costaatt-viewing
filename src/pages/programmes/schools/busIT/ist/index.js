import React from 'react'
import Head from 'next/head'
import HeadImage from '../../../../../components/PageComponents/HeadImage'
import headImg from "../../../../../../images/Programmes/tester2.jpg"
import Layout from '../../../../../components/Layout'
import ProgStyles from '../../../../../styles/Programmes.module.scss'
import ContactSideNav from '../../../../../components/PageComponents/ContactSideNav'
import DeptStyles from '../../../../../styles/Department.module.scss'
const index = () => {
 
    return (
      <>
        <Head>
          <title>IST</title>
        </Head>

        <HeadImage
          imagetext="Information Science and Technology"
          mainimage={headImg}
        />

        <section id="overview" className={ProgStyles.sectionoverview}>
          <div className={ProgStyles.umargintopsmall}>
            <p className={ProgStyles.headingprimary}> Mission</p>
            <p className={ProgStyles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo
              sed quae repellat blanditiis corrupti rerum quia voluptatem
              dolores, explicabo eius numquam, dolore incidunt reprehenderit
              aperiam, ad eos veniam unde. We are here for you Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Mollitia distinctio
              voluptatem a nemo quam, blanditiis quasi ipsa? Architecto
              aspernatur, esse eius id ut accusamus nihil ipsam nemo
              necessitatibus praesentium! Dolorem.
            </p>
            <ContactSideNav
              btn1txt="Visit"
              btn2txt="Apply"
              contacttype="Department Contact"
              tel="625-5030 ext 2222"
              email="mcharles@costtatt.edu.tt"
            />
          </div>
        </section>
        <section id="whatsup" className={DeptStyles.sectionwhatsup}>
          <p>What's happening use cards like post-it</p>
          <SchoolCard/>
        </section>
        <section id="featuredwork" className={DeptStyles.sectionfeaturedwork}>
          <p>Featured Work</p>
        </section>
        <section id="facultystaff" className={DeptStyles.sectionfaculty}>
          <p>Images of faculty and Staff</p>
        </section>
        <section id="prgorammes" className={DeptStyles.sectionprogrammes}>
          <p>accordian</p>
        </section>
        <section
          id="sturesource"
          className={DeptStyles.sectionsturesources}
        ></section>
      </>
    );

}
// index.getLayout = function getLayout(page) {
//     return <Layout>{page}</Layout>
//   }

export default index