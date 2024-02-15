import React from "react";
import { useState, useEffect } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import CardStyles from "../../styles/ProgCard.module.scss";
import Head from "next/head";
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";

import Link from "next/link";
import SearchCourse from "../../components/PageComponents/SearchCourse";
import { collegecore } from "./collegecoredata";
import CollegeCoreCard from "../../components/PageComponents/CollegeCoreCard";
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";

const ShortNameToLongName = {
  ContEd: "Continued Education",
  SocialSc: "Social Sciences",
  Science: "Science",
  Music: "Music",
  BehavSc: "Behavioral Science",
  Math: "Mathematics",
  Humanities: "Humanities",
};

const Collegecore = () => {
  const [disciplineFilters, setDisciplineFilters] = useState({
    ContEd: false,
    SocialSc: false,
    Science: false,
    Music: false,
    BehavSc: false,
    Math: false,
    Humanities: false,
  });
  const [disciplines, setDisciplines] = useState(collegecore);

  useEffect(() => {
    const hasFiltersChanged = Object.keys(disciplineFilters).some(
      (filter) => disciplineFilters[filter] === true
    );
    let finalResult = collegecore;
    console.log("Final Results", finalResult);
    if (hasFiltersChanged) {
      console.log("Filter has changed");
      const filteredDisciplines = Object.keys(disciplineFilters).reduce(
        (acc, filter) => {
          const results = finalResult.filter(
            (disc) =>
              disciplineFilters[filter] === true &&
              disc.discipline.trim() === ShortNameToLongName[filter]
          );
          console.log("Results", results);
          acc = acc.length ? [...acc, ...results] : results;
          return acc;
        },
        []
      );
      finalResult = filteredDisciplines;
    } else {
      finalResult = collegecore;
    }
    setDisciplines(finalResult);
  }, [disciplineFilters]);

  const handleFilters = (event) => {
    setDisciplineFilters({
      ...disciplineFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSearchSubmit = (result) => {
    setDisciplines(result);
  };

  const { ContEd, SocialSc, Science, Music, BehavSc, Math, Humanities } =
    disciplineFilters;

  return (
    <>
      <Head>
        <title>College Core</title>
      </Head>

      <HeaderNoImage caption="College Core" />
      {/* <p className={CardStyles.pheading}>College Core </p> */}
      <p className={CardStyles.urllayout}>
        COSTAATT / Programmes / College Core
      </p>
      <div className={CardStyles.container}>
        <div className={CardStyles.sidenavContainer}>
          <section className={CardStyles.sidenav}>
            <div className={CardStyles.sidenavtitlemain}> Filter By </div>

            <div>
              <SearchCourse
                handleSearchSubmit={handleSearchSubmit}
                DATA={collegecore}
              />
            </div>
            <p className={CardStyles.sidenavtitle}> by Discipline</p>
            <FormGroup>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ContEd}
                      onChange={handleFilters}
                      name="ContEd"
                    />
                  }
                  label="Continued Education"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={SocialSc}
                      onChange={handleFilters}
                      name="SocialSc"
                    />
                  }
                  label="Social Sciences"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Science}
                      onChange={handleFilters}
                      name="Science"
                    />
                  }
                  label="Science"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Music}
                      onChange={handleFilters}
                      name="Music"
                    />
                  }
                  label="Music"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={BehavSc}
                      onChange={handleFilters}
                      name="BehavSc"
                    />
                  }
                  label="Behavioral Science"
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
                      checked={Humanities}
                      onChange={handleFilters}
                      name="Humanities"
                    />
                  }
                  label="Humanities"
                />
              </div>
            </FormGroup>
          </section>
        </div>

        <section className={CardStyles.main}>
          {disciplines.map((data, index) => {
            return (
              <li key={index}>
                <CollegeCoreCard course={data} />
              </li>
            );
          })}
        </section>
      </div>
    </>
  );
};
// allcourses.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
Collegecore.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Collegecore;
