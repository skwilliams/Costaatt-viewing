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
            <p className={standardStyles.name}>
              <span> Dr. Keith Nurse</span>{" "}
            </p>

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
            Dr. Keith Nurse was appointed to the position of President of the
            College of Science, Technology and Applied Arts of Trinidad and
            Tobago (COSTAATT), with effect from November 01, 2022. 
            
            </p>
            <p className={standardStyles.paragraph}>

            Dr. Nurse is the former Principal/CEO of the Sir Arthur Lewis Community College
            in Saint Lucia and has worked as a Senior Economist and Advisor on
            Structural Policies and Innovation at the OECD Development Centre in
            Paris. He is the former World Trade Organization Chair at The
            University of the West Indies, where he also served as the Director
            of the Shridath Ramphal Trade Policy Centre, Executive Director of
            UWI Consulting Inc., Senior Fellow at the Sir Arthur Lewis Institute
            for Social and Economic Studies and Senior Lecturer at the Institute
            of International Relations.

            </p> 
            <p className={standardStyles.paragraph}>
               Throughout his career, Dr. Nurse has
            published extensively on a wide array of issues such as trade policy
            and services, industrial policy and innovation governance, creative
            industries and the digital economy, tourism industries, migration
            and diasporas, gender and economic restructuring, climate action and
            sustainable development and disaster risk reduction. Dr. Nurse has
            also worked as a consultant and advisor to various governments,
            regional and international agencies, including the UN Committee for
            Development Policy, the OAS, the IDB, and the Commonwealth and
            CARICOM Secretariats.
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
