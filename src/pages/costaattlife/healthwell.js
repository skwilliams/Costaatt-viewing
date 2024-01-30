import React from "react";
import Head from "next/head";
import HeadImage from "@/components/PageComponents/HeadImage";
import Link from "next/link";
import Image from "next/image";
import awaitingbanner from "../../../public/images/about/qualitycontrol1.jpg";


import standardStyles from "@/styles/main.module.scss";
import joinclub from "../../../public/images/costaattlife/joinclub.png";
import startclub from "../../../public/images/costaattlife/startclub.jpg";
import studentamb2 from "../../../public/images/costaattlife/studentAmb.jpg";
import ContactStudentLife from "@/components/PageComponents/ContactStudentLife";
const healthwell = () => {
  return (
    <>
      <Head>
        <title>Health and Wellness</title>
      </Head>
      <HeadImage mainimage={awaitingbanner} />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/costaattlife"></Link>
        <Link href="/costaattlife/healthwell">Health and Wellness</Link>
      </p>

      <section id="healthover" className={standardStyles.sectionNoSidenav}>
        <div className={standardStyles.introtext}>
          The College recognises that student success is premised not only on
          academic ability and application but on the positive social and
          emotional adjustment of the individual. The Health and Counselling
          Services Department (HCSD) is responsible for the provision of basic
          psycho-social counselling, promotion of healthy lifestyles, sick bay
          facilities and services for the differently-abled.
        </div>
        <hr className={standardStyles.centerunder} />
      </section>

      <section id="wellness" className={`${standardStyles.sectionambasadoor} `}>
        <h2
          className={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`}
        >
          {" "}
          Health and Wellness Promotion{" "}
        </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.activities__text}>
              {" "}
              <p>
                During the academic year, health and wellness promotional
                activities can be offered at each campus site. These are
                facilitated by the Ministry of Health and other trained
                personnel who specialise in their respective areas:
              </p>
              <div className={standardStyles.bullets}>
                <ul className={standardStyles.list}>
                  <li className={standardStyles.items}>
                    {" "}
                    Healthy Lifestyles (E.g. HIV/AIDS and Substance Abuse){" "}
                  </li>
                  <li className={standardStyles.items}>
                    {" "}
                    Primary Health Care (E.g. Nutrition, Chronic
                    Non-communicable disease assessment-BMI)
                  </li>
                  <li className={standardStyles.items}>
                    {" "}
                    Emotional Health (E.g. Stress, Time and Anger Management and
                    Managing Depression)
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href="#contact"
              className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
            >
              {" "}
              contact student life{" "}
            </Link>{" "}
          </div>{" "}
          {/* end of row 1*/}
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.composition}>
              <>
                <Image
                  // srcSet="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 1"
                  width="250"
                  height="0"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p1} `}
                  src={studentamb2}
                />

                <Image
                  // srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  width="250"
                  height="0"
                  className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p2}`}
                  src={startclub}
                />

                <Image
                  // srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  width="250"
                  height="0"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p3}`}
                  src={joinclub}
                />
              </>
            </div>
          </div>
        </div>{" "}
      </section>
      <section id="counsel" className={standardStyles.sectionbackColor}>
        <div className={standardStyles.sectionNoSidenav}>
          <h2
            className={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`}
          >
            {" "}
            Counselling Services{" "}
          </h2>
          <div className={standardStyles.row}>
            <div className={standardStyles.col1of2}>
              <div className={standardStyles.paragraph}>
                {" "}
                Counselling services provide a supportive, non-judgmental and
                confidential environment to students who may be experiencing
                emotional and/or psychological problems during their period of
                study. It is important to note that early intervention plays a
                crucial role in one's ability to cope and have a positive
                outcome in the face of adversities. Early Intervention allows a
                person to manage a condition before it becomes entrenched or
                chronic. In this way,a Counsellor may arrest the decline of a
                condition thus, preventing further damage or deterioration.
                <p className={standardStyles.paragraph}>
                  <b>
                    The department wishes to encourage students who may be
                    experiencing difficulties to seek early intervention with
                    the Campus Counsellor.
                  </b>
                </p>
              </div>
            </div>

            <div className={standardStyles.col1of2}>
              <div className={standardStyles.paragraph}>
                <p>
                  The main office of the Department of Health and Counselling
                  Services is located at the City Campus. However, counselling
                  services are available at all other campuses.
                </p>
                <h3>Ways to gain access to counselling</h3>
                <div className={standardStyles.bullets}>
                  <ul className={standardStyles.list}>
                    <li className={standardStyles.items}>
                      Referrals can be made by faculty members, academic and
                      student support services coordinators, campus directors
                      and advisors who will arrange an appointment with the
                      Campus Counsellor through the Department of Health and
                      Counselling Services.
                    </li>
                    <li className={standardStyles.items}>
                      Students are encouraged to visit or call the department to
                      request counselling services. Appointments can also be
                      made via the{" "}
                      <a href="https://my.costaatt.edu.tt/group/mycampus/health-and-wellness/services/counselling">
                        <u>
                          {" "}
                          Health and Wellness page of the MyCOSTAATT Student
                          Portal.{" "}
                        </u>
                      </a>
                    </li>{" "}
                    <li className={standardStyles.items}>
                      <b>
                        {" "}
                        In an emergency situation, no appointment is needed;
                        students may walk in.{" "}
                      </b>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
              >
                Make a request{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="disability" className={standardStyles.sectionNoSidenav}>
        <>
          <h2
            className={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`}
          >
            Disability
          </h2>
          <p className={standardStyles.paragraph}>
            It is the policy of COSTAATT that discrimination against individuals
            with disabilities is prohibited. COSTAATT provides equal educational
            opportunities with reasonable accommodations for qualified
            individuals who are differently -abled.
          </p>
          <p className={standardStyles.paragraph}>
            Students with physical, mental or learning disabilities should
            contact the Department of Health & Counselling Services for
            assistance if any special accommodation is needed. The College can
            provide enhanced access to the educational process for students who
            disclose and can document their disabilities. We offer appropriate
            accommodations to facilitate success
          </p>
        </>
      </section>
      <section id="sickbay" className={standardStyles.sectionbackColor}>
        <>
          <div
            className={`${standardStyles.sectionNoSidenav} ${standardStyles.marginBottomSmall}`}
          >
            <h2
              className={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`}
            >
              {" "}
              Sick Bay
            </h2>
            <p className={standardStyles.paragraph}>
              Sick bay services are available to all students who may become ill
              while at campus. The services offered are appropriate for short
              term and minor emergencies (basic first aid). Where necessary,
              arrangements would be made for the ill student to be transported
              to a hospital or a preferred medical practitioner/ health care
              provider. In such instances, parents, guardians or spouses will be
              contacted immediately.
            </p>
            <p className={standardStyles.paragraph}>
              The College does not provide primary health care and therefore
              cannot be considered as a substitute for physicians or other
              health care providers. Any costs of the visits to a health
              institution/medical practitioner would be borne by the student.
            </p>
            <div>
              <p className={standardStyles.headingTertiary}>
                {" "}
                OTHER SERVICES OFFERED BY THE DEPARTMENT OF HEALTH AND
                COUNSELLING SERVICES:
              </p>
              <div className={standardStyles.bullets}>
                <ul className={standardStyles.list}>
                  <li className={standardStyles.items}>
                    {" "}
                    Referral of students with Social Issues to Government
                    Agencies
                  </li>
                  <li className={standardStyles.items}>
                    {" "}
                    Testing- Blood Pressure and Blood Sugar (for persons with
                    Diabetes){" "}
                  </li>
                  <li className={standardStyles.items}>
                    {" "}
                    Facilitating students with class projects (health articles){" "}
                  </li>
                  <li className={standardStyles.items}>
                    {" "}
                    Distributing health related brochures{" "}
                  </li>
                  <li className={standardStyles.items}>
                    {" "}
                    Answering queries as it relates to health concerns{" "}
                  </li>
                  <li className={standardStyles.items}> Health Fair </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      </section>

      <section id="contact" className={standardStyles.sectionNoSidenav}>
        <h2
          className={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`}
        >
          {" "}
          Contact Student Life{" "}
        </h2>

        <ContactStudentLife />
      </section>
    </>
  );
};

export default healthwell;
