import React from "react";
import ProgStyles from "../../styles/Programmes.module.scss";
import CardStyles from "../../styles/ProgCard.module.scss";
import Head from "next/head";
import logo from "../../../images/Links/courses business.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import SearchBar from "@/components/SearchBar";
import HeadImage from "@/components/PageComponents/HeadImage";
import { BiSearch } from "react-icons/bi";
import SearchCourse from "@/components/PageComponents/SearchCourse"
import Layout from '@/components/Layout'



import ProgCard from "../../components/PageComponents/ProgCard";

const allcourses = () => {
  
  return (
    <>
      <Head>
        <title>All Courses </title>
      </Head>
  <p className={CardStyles.urllayout}>
        COSTAATT / Academics / All Courses
      </p>

  
<p className={CardStyles.mainheading}>ALL COURSES </p>
 <div >
<SearchCourse />
 </div>
      <section className={CardStyles.sidenav}>
      
        
          
            <p className={CardStyles.sidenavtitlemain}> Filter By </p>

         
             
              <p className={CardStyles.sidenavtitle}> by Subject Area</p>
                <Link className={CardStyles.sidenavlink} href="#progoverview">
                  Accounting
                </Link>
                <Link className={CardStyles.sidenavlink} href="#careers">
                  Information Technology
                </Link>
                <Link className={CardStyles.sidenavlink} href="#featuredwork">
                  Library Science
                </Link>
                <Link className={CardStyles.sidenavlink} href="#facultystaff">
                  Music
                </Link>
                <Link className={CardStyles.sidenavlink} href="#programmes">
                  Journalism
                </Link>
                <Link className={CardStyles.sidenavlink} href="#fees">
                 Mathematics
                </Link>
           
            <p className={CardStyles.sidenavtitle}> by Levels</p>
 <div>

  <Link className={CardStyles.sidenavlink} href="#progoverview">
              Undergraduate
            </Link>
            <Link className={CardStyles.sidenavlink} href="#careers">
              Associate Degrees
            </Link>
            <Link className={CardStyles.sidenavlink} href="#featuredwork">
              Diplomas
            </Link>
            <Link className={CardStyles.sidenavlink} href="#facultystaff">
              Certificates
            </Link>
 </div>
            
       
      </section>
      {/* const ProgCard =({photo,degreeTile,campus,fulltime,parttime,startdate1,startdate2}) */}

      <section className={CardStyles.mainright}>
        <ProgCard 
        photo={logo}
         degreeTitle="Nursing"
         campus="Chaguanas"
         fulltime={3}
         parttime={(6)}
         startdate1={("June 2023")}
         startdate2={("January 2024")}
         level={"Bachelors | Associate "}
         
         />
        <ProgCard 
        photo={logo}
         degreeTitle="Web Development "
         campus="Chaguanas"
         fulltime={3}
         parttime={(6)}
         startdate1={("June 2023")}
         startdate2={("January 2024")}
         level={"Bachelors | Associate | Certificate"}
         
         />
           <ProgCard 
        photo={logo}
         degreeTitle="Radiography"
         campus="Chaguanas"
         fulltime={3}
         parttime={(6)}
         startdate1={("June 2023")}
         startdate2={("January 2024")}
         level={" Associate | Certificate"}
         
         />
           <ProgCard 
        photo={logo}
         degreeTitle="Music"
         campus="Chaguanas"
         fulltime={3}
         parttime={(6)}
         startdate1={("June 2023")}
         startdate2={("January 2024")}
         level={" Associate | Certificate"}

         
         />
           <ProgCard 
        photo={logo}
         degreeTitle="Nursing"
         campus="Chaguanas"
         fulltime={3}
         parttime={(6)}
         startdate1={("June 2023")}
         startdate2={("January 2024")}
         
         />
      </section>
    </>
  );
};



export default allcourses;
