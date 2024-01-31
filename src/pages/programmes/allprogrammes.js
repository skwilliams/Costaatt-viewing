import React from "react";
import { useState, useEffect } from "react";
import CardStyles from "../../styles/ProgCard.module.scss";
import Head from "next/head";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import Link from "next/link";
import Layout1 from "../../components/Layouts/TopNavOnly_NoDropdown";
import SearchCourse from "@/components/PageComponents/SearchCourse";
import ProgCard from "../../components/PageComponents/ProgCard";
import ProgramCard from "@/components/PageComponents/ProgramCard";
//import { coursedata } from './allprogrammedata';
import SCHOOLDATA from "../../../public/data/schooldata.json";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import { FaArrowUp } from "react-icons/fa";
import BackToTopButton from "@/components/NavComponents/BackToTopButton";
import ScrollToTopButton from "@/components/PageComponents/ScrollToTopButton";


const Allprogrammes = () => {
  // const stumpNames = SCHOOLDATA.map((school) => school.nameStump);
  // console.log(stumpNames);
  const [schoolFilters, setSchoolFilters] = useState({
    busIT: false,
    // liberal: false,
    // nursing: false,
    // enviro: false,
    // kengord: false,
    // workF: false,
  });
  const [levelFilters, setLevelFilters] = useState({
    Bachelor: false,
    Associate: false,
    Diploma: false,
    Certificate: false,
  });
  const formattedPrograms = SCHOOLDATA.reduce((acc, school) => {
    school.departments.map((dept) => {
      if (dept.programmes) {
        dept.programmes.map((prg) => {
          const program = {
            school: school.name,
            schoolStump: school.nameStump,
            department: dept.name,
            department_image: dept.image,
            ...prg,
          };
          acc.push(program);
        });
      }
    });

    return acc;
  }, []);

  const [allPrograms, setAllPrograms] = useState(formattedPrograms);

  useEffect(() => {
    const hasSchoolFiltersChanged = Object.keys(schoolFilters).some(
      (filter) => schoolFilters[filter] === true
    );
    const hasLevelFiltersChanged = Object.keys(levelFilters).some(
      (filter) => levelFilters[filter] === true
    );
    let finalResult = formattedPrograms;
    if (hasSchoolFiltersChanged) {
      const filteredPrograms = Object.keys(schoolFilters).reduce(
        (acc, filter) => {
          const results = finalResult.filter(
            (program) =>
              schoolFilters[filter] === true && program.schoolStump === filter
          );
          acc = acc.length ? [...acc, ...results] : results;
          return acc;
        },
        []
      );
      finalResult = filteredPrograms;
    }
    if (hasLevelFiltersChanged) {
      const filteredPrograms = Object.keys(levelFilters).reduce(
        (acc, filter) => {
          const result = finalResult.filter(
            (program) =>
              levelFilters[filter] === true && program.prog_level === filter
          );

          acc = acc.length ? [...acc, ...result] : result;

          return acc;
        },
        []
      );
      finalResult = filteredPrograms;
    }
    if (!hasLevelFiltersChanged && !hasSchoolFiltersChanged) {
      finalResult = formattedPrograms;
    }
    setAllPrograms(finalResult);
  }, [schoolFilters, levelFilters, allPrograms, formattedPrograms]);

  const { busIT, liberal, nursing, enviro, kengord, workF } = schoolFilters;
  const { Bachelor, Associate, Diploma, Certificate } = levelFilters;

  const handleSchoolFilter = (event) => {
    console.log("Event", event.target.name, event.target.checked);
    setSchoolFilters({
      ...schoolFilters,
      [event.target.name]: event.target.checked,
    });
  };
  const handleLevelFilter = (event) => {
    console.log("Event", event.target.name, event.target.checked);
    setLevelFilters({
      ...levelFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSearchSubmit = (result) => {
    setAllPrograms(result);
  };

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>All Programmes </title>
      </Head>
      <HeaderNoImage caption="All Programmes" />
      <p className={CardStyles.urllayout}>
        COSTAATT Programmes/ All Programmes
      </p>
      <div className={CardStyles.container}>
        <div className={CardStyles.sidenavContainer}>
          <section className={CardStyles.sidenav}>
            <div className={CardStyles.sidenavtitlemain}> Filter By </div>
            <div>
              <SearchCourse handleSearchSubmit={handleSearchSubmit} />
            </div>
            <p className={CardStyles.sidenavtitle}> by Schools</p>{" "}
            <FormGroup>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={busIT}
                      onChange={handleSchoolFilter}
                      name="busIT"
                    />
                  }
                  label="Business and Digital Technologies"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={enviro}
                      onChange={handleSchoolFilter}
                      name="enviro"
                    />
                  }
                  label="Environment, Circular Economy and Sustainability"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={kengord}
                      onChange={handleSchoolFilter}
                      name="kengord"
                    />
                  }
                  label="Ken Gordon School of Communication Creative and Digital Media"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={liberal}
                      onChange={handleSchoolFilter}
                      name="liberal"
                    />
                  }
                  label="Liberal Arts, Education and Digital Humanities"
                />
              </div>
              <div className={CardStyles.sidenavlink}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nursing}
                      onChange={handleSchoolFilter}
                      name="nursing"
                    />
                  }
                  label=" Education and Digital Humanities Nursing, Health and Medical Technologies"
                />
              </div>
              <p className={CardStyles.sidenavtitle}> by Levels</p>
              <div>
                <div className={CardStyles.sidenavlink}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Bachelor}
                        onChange={handleLevelFilter}
                        name="Bachelor"
                      />
                    }
                    label="Undergraduate"
                  />
                </div>
                <div className={CardStyles.sidenavlink}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Associate}
                        onChange={handleLevelFilter}
                        name="Associate"
                      />
                    }
                    label="Associate Degrees"
                  />
                </div>
                <div className={CardStyles.sidenavlink}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Diploma}
                        onChange={handleLevelFilter}
                        name="Diploma"
                      />
                    }
                    label="Diplomas"
                  />
                </div>
                <div className={CardStyles.sidenavlink}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Certificate}
                        onChange={handleLevelFilter}
                        name="Certificate"
                      />
                    }
                    label="Certificates"
                  />
                </div>
              </div>
            </FormGroup>
          </section>
        </div>

        <section className={CardStyles.main}>
          {allPrograms.map((program, index) => {
            return (
              <li key={index}>
                <ProgramCard program={program} />
              </li>
            );
          })}
        </section>
        {/* <button 
       className="fixed bottom-0 right-0 p-10" 
       
       onClick={scrollToTop}>
          {/* <FaArrowUp /> 
        
        </button>  */}
        {/* <BackToTopButton /> */}
        <ScrollToTopButton />
      </div>
    </>
  );
};
Allprogrammes.getLayout = function getLayout(page) {
  return <Layout1>{page}</Layout1>;
};

export default Allprogrammes;
