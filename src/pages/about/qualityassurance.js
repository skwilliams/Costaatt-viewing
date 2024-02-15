import React, { useState, useEffect, useRef } from "react";




import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";

import standardStyles from "../../styles/main.module.scss";
import AboutStyles from "../../styles/About.module.scss";

import HeadImage from "../../components/PageComponents/HeadImage";

import headqualiy from"../../../public/images/about/Standard.jpg"
import qualityticks from "../../../public/images/about/quality2.svg";

import Image from "next/image";
// import ScrollRevealComponent from "../../components/PageComponents/AboutComponents/ScrollRevealComponent";

const qualityassurance = () => {

//   const ScrollRevealComponent = dynamic(() => import("../../components/PageComponents/AboutComponents/ScrollRevealComponent"),
//  {
//     ssr: false,
//   });


  return (
    <>
      <Head>
        <title> Quality Assurance </title>
      </Head>

      
      <HeadImage mainimage={headqualiy} wide="5000" high={3337} />
      <p className={standardStyles.toplinksnav}>
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/qualityassurance">Quality Assurance</Link>
      </p>
      <section className={AboutStyles.section_quality}>
        <header>
          <span className={AboutStyles.heading_primary__main}>
            Quality Assurance
          </span>
          <span className={AboutStyles.heading_primary__sub}>
            Establishing, Implementing and Maintaining the College's Quality
            Management System
          </span>
        </header>
        <h1 className={AboutStyles.heading_primary__tertiary}>
          Quality Policy
        </h1>
        <p>
          COSTAATT's Quality Policy is the foundation upon which its Quality
          Management System (QMS) has been structured. It enshrines the essence
          of our vision and mission and charts the College's direction in
          fulfilling its quality objectives. The policy provides a framework
          that facilitates evaluation of the learning experience of our students
          and assures standards and performance that allow for planning and
          continuous improvement throughout the organisation. Moreover, the
          Quality Policy incorporates the following, which have been adopted as
          the College's quality statement:
        </p>
        <p>The College is committed to:</p>

        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <ul>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* Source: https://icfnewmexico.org/event/start-with-self-critical-role-of-culture-in-coaching/ */}
                fostering and maintaining a culture which is aligned with the
                institution's mission and vision, and capable of honest,
                transparent and critical self-evaluation
              </li>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* Source: https://www.linkedin.com/pulse/learn-quality-management-system-punyamacademy */}
                implementing a Quality Management System (QMS) which will ensure
                compliance with relevant legislative and/or professional
                standards and regulations
              </li>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* Source: https://www.litmos.com/blog/articles/why-learning-experience-matters */}
                creating the conditions for improving the quality of the
                learning experience by continuously monitoring and evaluating
                the quality of teaching, learning, co-curricular and
                extra-curricular activities
              </li>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* Source: https://www.infoprolearning.com/elearning-glossary/managed-learning-services/ */}
                providing supportive services and a stimulating learning climate
                which encourage student retention and achievement
              </li>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* <img src="../img/feedback.png" /> */}
                {/* Source: https://mosaicprojects.wordpress.com/2014/01/31/the-art-of-giving-feedback/ */}
                providing mechanisms for feedback from students, internal
                customers and other stakeholders in order to improve its
                services
              </li>
            </ul>
          </div>
          <div className={standardStyles.col1of2}>
            <ul>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* <img src="../img/quality.jpg" /> */}
                {/* Source: https://www.cabem.com/blog/2023/03/23/6-benefits-of-quality-assurance-tracking/ */}
                establishing and maintaining a quality assurance system which
                ensures the continuous improvement of teaching, learning and all
                support systems at the College
              </li>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* Source: https://www.sacei.edu.au/the-qualification/qa */}
                establishing an integrated planning and quality assurance cycle
                which is effectively communicated throughout the organisation
                and which guides all college operations
              </li>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* Source: https://bernardmarr.com/how-do-you-set-the-right-targets-for-your-business-here-are-some-top-tips/ */}
                developing, implementing, monitoring and, where appropriate,
                benchmarking standards and/or targets for all areas of activity
              </li>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* Source: https://elearningindustry.com/learning-and-development-anyone-can-right */}
                investing in training and development to build staff capacity to
                maintain continuous improvement systems
              </li>
              <li>
                <Image alt="Ticks " src={qualityticks} width={80} height={70} />
                {/* Source: https://upscwithnikhil.com/article/ethics/accountability-and-responsibility */}
                ensuring responsibility and accountability in all relationships
                with its stakeholders including: students, faculty, staff,
                partners, the government and local communities
              </li>
            </ul>
          </div>
        </div>

        <div className={AboutStyles.sectionquality__parallax} />
        <div>
          <h1 className={standardStyles.heading_primary__tertiary}>
            Quality Council
          </h1>
          <p>
            The College's Quality Council was convened in January 2008 and
            comprises a cross-section of academic and non-academic staff. All
            members of the Council have undergone training in quality management
            and have acquired the requisite skills and knowledge to assist in
            streamlining the operations, programmes and services which the
            College provides to both internal and external customers and
            stakeholders. This Council is a key component of the College's
            Quality Management System, and its members are expected to play a
            pivotal role as change agents in the continued emergence and
            cementing of a quality culture.
          </p>
        </div>
        <div
          className={`${standardStyles.row} ${AboutStyles.section_quality__container}`}
        >
          <h1 className={AboutStyles.section_quality__container__heading}>
            Fast Facts
          </h1>
          <div
            className={`${standardStyles.col1of3} ${AboutStyles.section_quality__data}`}
          >
            <h1 className={AboutStyles.counter} data-count="6644">
              0
            </h1>
            <h1>Currently Enrolled</h1>
          </div>
          <div
            className={`${standardStyles.col1of3} ${AboutStyles.section_quality__data}`}
          >
            <h1 className={AboutStyles.counter} data-count="550">
              0
            </h1>
            <h1>Courses Available</h1>
          </div>
          <div
            className={`${standardStyles.col1of3} ${AboutStyles.section_quality__data}`}
          >
            <h1 className={AboutStyles.counter} data-count="14322">
              0
            </h1>
            <h1>Graduands 2011 - 2023</h1>
          </div>
        </div>
        {/* <ScrollRevealComponent /> */}
        {/* <script>{`
            ScrollReveal({
                reset: true,
                distance: '6rem',
                duration: 2500,
                delay: 400
            });

            ScrollReveal().reveal('.section_quality__data', { delay: 500, origin: 'top' });

            const counters = document.querySelectorAll('.counter'),
                observer = new IntersectionObserver(
                    entries => entries.forEach(entry => entry.isIntersecting && animate(entry.target)),
                    {
                        threshold: 1
                    }
                ),
                animate = counter => {
                    let initial_count = 0;
                    const final_count = counter.dataset.count;

                    let counting = setInterval(updateCounting, 1);

                    function updateCounting() {

                        if (initial_count < 1000) {
                            initial_count += 5;
                            counter.innerText = initial_count;
                        }

                        if (initial_count >= 1000) {
                            initial_count += 100;
                            counter.innerText = (initial_count / 1000).toFixed(1) + 'K+';
                        }

                        if (initial_count >= 1000000) {
                            initial_count += 500000;
                            counter.innerText = (initial_count / 1000000).toFixed(1) + 'M+';
                        }

                        if (initial_count >= final_count) {
                            clearInterval(counting);
                        }
                    }

                };

            // attach the counters to the observer
            counters.forEach(c => observer.observe(c));
        `}</script> */}
        <div>
          <h1 className={standardStyles.heading_primary__tertiary}>
            Department of Quality Assurance and Institutional Research (QAIR)
          </h1>
          <p>
            As a result of mandatory regulatory requirements and the highly
            competitive nature within the tertiary education sector, COSTAATT
            formerly established the Department of Quality Assurance and
            Accreditation in January 2009. In July 2009 the new organizational
            structure merged Institutional Research with the Department of
            Quality Assurance and Accreditation resulting in the now existing
            Department of Quality Assurance and Institutional Research (QAIR).
            This particular merger was created to produce critical synergies
            between research work and quality improvement. QAIR also plays a
            significant role in supporting the institution's
            accreditation-related activities. Staff in the Department of Quality
            Assurance and Institutional Research includes a director, two
            research officers and a research assistant. Major Responsibilities
            of QAIR:
          </p>
          <div className={standardStyles.row}>
            <div className={standardStyles.col1of2}>
              <ul>
                <li>
                  <Image
                    alt="Ticks "
                    src={qualityticks}
                    width={80}
                    height={70}
                  />
                  {/* Source: https://www.iml.unibe.ch/en/offers/assessment-en/evaluations */}
                  Manage all activities related to the administration of online
                  student course evaluations.
                </li>
                <li>
                  <Image
                    alt="Ticks "
                    src={qualityticks}
                    width={80}
                    height={70}
                  />
                  {/* Source: https://www.donotedit.com/how-to-find-a-good-research-topic/ */}
                  Develop and implement an institutional research agenda to
                  support the College's mission and strategic continuous
                  improvement initiatives.
                </li>
                <li>
                  <Image
                    alt="Ticks "
                    src={qualityticks}
                    width={80}
                    height={70}
                  />
                  {/* Source: https://www.brookings.edu/articles/value-of-qualitative-data-for-advancing-equity-in-policy/ */}
                  Collaborate with heads and other key faculty and staff to
                  design and implement research activities to evaluate
                  departmental operations.
                </li>
                <li>
                  <Image
                    alt="Ticks "
                    src={qualityticks}
                    width={80}
                    height={70}
                  />
                  {/* Source: https://www.freepik.com/free-vector/gradient-ui-ux-elements-collection_16627360.htm#query=dashboard&position=1&from_view=search&track=sph&uuid=c415ec76-70b2-4afb-be08-36075a57808e */}
                  Analyse data and highlight findings in written reports and
                  other appropriate data visualizations (e.g. infographics, data
                  dashboards etc.).
                </li>
              </ul>
            </div>
            <div className={standardStyles.col1of2}>
              <ul>
                <li>
                  <Image
                    alt="Ticks "
                    src={qualityticks}
                    width={80}
                    height={70}
                  />
                  {/* Source: https://nces.ed.gov/programs/digest/ */}
                  Produce the biennial College Statistical Digest which displays
                  longitudinal data (spanning the last five years) on key
                  performance indicators of academic and administrative
                  departments across college.
                </li>
                <li>
                  <Image
                    alt="Ticks "
                    src={qualityticks}
                    width={80}
                    height={70}
                  />
                  {/* Source: https://www.freepik.com/free-photo/pie-graph-analysis-statistics-report-concept_16483390.htm#query=compile%20data&position=4&from_view=search&track=ais&uuid=09807f29-b1a2-43d1-9376-9f50a217820a*/}
                  Compile and verify data to fulfill internal and external data
                  requests.
                </li>
                <li>
                  <Image
                    alt="Ticks "
                    src={qualityticks}
                    width={80}
                    height={70}
                  />
                  {/* Source: https://www.quora.com/What-are-the-differences-between-strategic-analysis-and-competitive-analysis */}
                  Provide support to the College's administrative decision
                  makers in order to facilitate strategic planning,
                  policy-making, resource allocations, enrollment projections,
                  and other processes requiring sound strategic analyses.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

qualityassurance.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default qualityassurance;
