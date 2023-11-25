import React from "react";
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";
import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import newsCardPre from "@/components/PageComponents/newsCardPre";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { IconContext } from "react-icons";
import HomeStyles from "../../styles/Home.module.scss";
import NewsTilePres from "../../components/HomeComponents/NewsTilePres";
import DeptStyles from "../../styles/DepartCard.module.scss";
import StaffStyle from "../../styles/StaffDeptCard.module.scss";
import Image from "next/image";

import FacultyStaffCard from "@/components/PageComponents/FacultyStaffDepCard";
import {officeofpresident} from "./leadershipdata"
import photo from "../../../public/images/Leadership photos/Keith-Nurse.jpeg"
import {
 
  NEWS,

} from "../../components/HomeComponents/homeLinks"
import StaffCard from "@/components/PageComponents/StaffCard";


 


const president = () => {
  return (
    <>
      <Head>
        <title>President |{""} COSTAATT</title>
      </Head>

      <HeaderNoImage caption="College Leadership" />

      <SideNavOnlyLayout>
        {" "}
        <p
          className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
        >
          <Link href="/"> COSTAATT/ </Link>
          <Link href="/about">About/</Link>
          <Link href="/about/president">President</Link>
        </p>
        <section
          id="message"
          className={standardStyles.sectionWithSideNavFirst}
        >
          <h2 className={standardStyles.newsHeading}>
            <span> President's </span>MESSAGE
          </h2>
          <div className={standardStyles.president}>
            <Image
              className={standardStyles.presidentimg}
              src={photo}
              alt="Photo of Keith Nurse"
              width="363"
              height="422"
            />
            <p className={standardStyles.name}><span> Dr. Keith Nurse</span>  </p>

            {/* <StaffCard
              name="Keith Nurse"
              position="President"
              phone="625-5030 ext 0000"
              email="knurse@costaatt.edu.tt"
            ></StaffCard> */}
          </div>
          <p className={standardStyles.paragraph}>
            Welcome to the College of Science, Technology and Applied Arts of
            Trinidad and Tobago. At COSTAATT, we are strongly committed to the
            principle of 'transforming lives, transforming communities and
            transforming the nation …one student at a time’. Inherent in our
            institutional philosophy and a key component of our educational
            thrust is a commitment to community service. Now, more than ever,
            our nation requires a highly educated workforce comprising citizens
            who understand the need for quality public services and lifelong
            learning as two of the hallmarks of a vibrant economy and
            sustainable development. COSTAATT offers courses of study that lead
            to certificates, diplomas, associate degrees and bachelor’s degrees.
            With campuses and Learning Centres located in Chaguanas, Port of
            Spain, El Dorado, Sangre Grande, San Fernando and Tobago, we are
            continually developing programmes and initiatives to meet the needs
            of the various sectors that we serve. At COSTAATT, we recognise that
            globalisation is shrinking our world and we are, therefore,
            committed to preparing our students to compete in the global
            knowledge economy, by stimulating them to use their minds, to become
            critical thinkers, decision makers and leaders of their respective
            communities.
          </p>
        </section>
        <section id="bio" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            <span> Biography </span>
          </h2>
          <p className={standardStyles.paragraph}>
            Fugiat qui nulla voluptate magna sunt deserunt aliquip ipsum cillum.
            Proident dolor reprehenderit cupidatat mollit minim. Aliqua id enim
            officia minim sunt nulla ex. Et id fugiat velit adipisicing. Amet do
            minim ad enim voluptate laborum reprehenderit magna. Pariatur
            proident eu sint laboris reprehenderit. Pariatur proident eu et
            veniam qui enim sunt. Consectetur veniam aliqua sint velit culpa
            exercitation proident adipisicing. Irure labore mollit duis labore.
            Aliquip fugiat reprehenderit ipsum anim ad adipisicing laboris est
            nulla velit voluptate officia est veniam. Magna velit dolor ut
            officia ipsum esse Lorem dolore consequat ut et sit aliquip. Velit
            do exercitation anim officia nostrud et nisi eiusmod ipsum aliqua
            incididunt. Et duis do laborum quis. Ullamco in amet sit minim
            consectetur. Sunt sit enim mollit commodo nostrud. Nulla laboris
            deserunt ullamco dolore laboris incididunt. Elit consectetur
            excepteur voluptate excepteur adipisicing anim ipsum irure ad.
            Ullamco non officia qui sit aute anim ea non veniam.
          </p>
        </section>
        <section id="news" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            <span> President </span>in the NEWS
          </h2>
          <div className={HomeStyles.sectionFourTiles}>
            {NEWS.map((tile, index) => {
              return (
                <div key={index} className={HomeStyles.newsTileHomepage}>
                  <Link href="news">
                    <NewsTilePres
                      title={tile.title}
                      img={tile.image}
                      date={tile.date}
                      desc={tile.desc}
                      time={tile.time}
                      topic={tile.topic}
                      location={tile.location}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
        <section id="officers" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            <span> STAFF </span>
          </h2>
          <div className={DeptStyles.threeColGridCon}>
            <FacultyStaffCard staff={officeofpresident} />
          </div>
        </section>
        <section id="contact" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            <span> CONTACT </span>
          </h2>
        </section>
      </SideNavOnlyLayout>
    </>
  );
};
president.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default president;
