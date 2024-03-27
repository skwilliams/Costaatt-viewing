import React from "react";
import { useState, useEffect } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import CardStyles from "../../styles/ProgCard.module.scss";
import Head from "next/head";
import { sql } from "@vercel/postgres";
import Link from "next/link";

import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";

import SearchCourse from "../../components/PageComponents/SearchCourse";
import ProgCard from "../../components/PageComponents/ProgCard";
import { allshortcourses } from "./shortcoursedata";
import CollegeCoreCard from "../../components/PageComponents/CollegeCoreCard";
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";
import ShortCoursesCard from "../../components/PageComponents/ShortCoursesCard";


export async function getStaticProps() {
  // Fetch data from external API
  const response = await sql`SELECT * FROM shortcourse;`;
  const shortcourses = response.rows;
  // Pass data to the page via props
  return { props: { shortcourses } };
}


const ShortNameToLongName = {
  AdvSocMedia: "Advertising and Social Media",
  CommSkills: "Communication Skills",
  FilmProd: "Film and Production",
  InfoTecComp: "Information Technology and Computer Skills",
  JornPubRelat: "Journalism and Public Relations",
  Math: "Mathematics",
  MgtEnt: "Management and Entrepreneurship",
  Tourism: "Tourism",
  PsySocWork: "Psychology and Social Work",
  SpecialNeeds: "Special Needs Education",
  Independent: "Independent",
};

const Shortcourses = ({ shortcourses }) => {
  const [areaFilters, setareaFilters] = useState({
    AdvSocMedia: false,
    CommSkills: false,
    FilmProd: false,
    InfoTecComp: false,
    JornPubRelat: false,
    Math: false,
    MgtEnt: false,
    Tourism: false,
    PsySocWork: false,
    SpecialNeeds: false,
    Independent: false,
  });
  const [areas, setareas] = useState(shortcourses);

  useEffect(() => {
    const hasFiltersChanged = Object.keys(areaFilters).some(
      (filter) => areaFilters[filter] === true
    );
    let finalResult = shortcourses;
    console.log("Final Results", finalResult);
    if (hasFiltersChanged) {
      console.log("Filter has changed");
      const filteredareas = Object.keys(areaFilters).reduce((acc, filter) => {
        const results = finalResult.filter(
          (disc) =>
            areaFilters[filter] === true &&
            disc.area.trim() === ShortNameToLongName[filter]
        );
        console.log("Results", results);
        acc = acc.length ? [...acc, ...results] : results;
        return acc;
      }, []);
      finalResult = filteredareas;
    } else {
      finalResult = shortcourses;
    }
    setareas(finalResult);
  }, [areaFilters,shortcourses]);

  const handleFilters = (event) => {
    setareaFilters({
      ...areaFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSearchSubmit = (result) => {
    setareas(result);
  };

  const {
    AdvSocMedia,
    CommSkills,
    FilmProd,
    InfoTecComp,
    JornPubRelat,
    Math,
    MgtEnt,
    Tourism,
    PsySocWork,
    SpecialNeeds,
    Independent,
  } = areaFilters;

  return (
    <>
      <Head>
        <title>Short Courses</title>
      </Head>

      <HeaderNoImage caption="Short Courses" />
      <p className={CardStyles.urllayout}>
        COSTAATT / Programmes / Short Courses
      </p>

      <div className={CardStyles.container}>
        <div className={CardStyles.sidenavContainer}>
          <section className={CardStyles.sidenav}>
            <div className={CardStyles.sidenavtitlemain}> Filter By </div>

            <div>
              <SearchCourse
                handleSearchSubmit={handleSearchSubmit}
                DATA={shortcourses}
              />
            </div>
            <p className={CardStyles.sidenavtitle}> by Area</p>
            <FormGroup>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={AdvSocMedia}
                      onChange={handleFilters}
                      name="AdvSocMedia"
                    />
                  }
                  label="Advertising and Social Media"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={CommSkills}
                      onChange={handleFilters}
                      name="CommSkills"
                    />
                  }
                  label="Communication Skills"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={FilmProd}
                      onChange={handleFilters}
                      name="FilmProd"
                    />
                  }
                  label="Film and Production"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={InfoTecComp}
                      onChange={handleFilters}
                      name="InfoTecComp"
                    />
                  }
                  label="Information Technology and Computer Skills"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={JornPubRelat}
                      onChange={handleFilters}
                      name="JornPubRelat"
                    />
                  }
                  label="Journalism and Public Relations"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Math}
                      onChange={handleFilters}
                      name="Math"
                    />
                  }
                  label="Mathematics"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={MgtEnt}
                      onChange={handleFilters}
                      name="MgtEnt"
                    />
                  }
                  label="Management and Entrepreneurship"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Tourism}
                      onChange={handleFilters}
                      name="Tourism"
                    />
                  }
                  label="Tourism"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={PsySocWork}
                      onChange={handleFilters}
                      name="PsySocWork"
                    />
                  }
                  label="Psychology and Social Work"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={SpecialNeeds}
                      onChange={handleFilters}
                      name="SpecialNeeds"
                    />
                  }
                  label="Special Needs Education"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Independent}
                      onChange={handleFilters}
                      name="Independent"
                    />
                  }
                  label="Independent"
                />
              </div>
            </FormGroup>
          </section>
        </div>

        <section className={CardStyles.main}>
          {areas.map((data, index) => {
            return (
              <li key={index}>
                <ShortCoursesCard course={data} />
              </li>
            );
          })}
        </section>
      </div>
    </>
  );
};

Shortcourses.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Shortcourses;
