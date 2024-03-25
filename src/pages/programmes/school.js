import TopNavOnlyLayout from "../../components/Layouts/TopNavOnly_NoDropdown";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import standardStyles from "../../styles/main.module.scss";
import ProgStyles from "../../styles/Programmes.module.scss";
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";
import { fetchCampus } from "../../lib/dataquery";
import Image from "next/image";

import { sql } from "@vercel/postgres";

import HeadImage from "../../components/PageComponents/HeadImage";
import awaitingbanner from "../../../public/images/about/qualitycontrol1.jpg";

export async function getStaticProps() {
  // Fetch data from external API
  const response = await sql`SELECT * FROM school;`;
  const schools = response.rows;
  // Pass data to the page via props
  return { props: { schools } };
}

const visitus = ({ schools }) => {
  return (
    <>
      <Head>
        <title>Visit Us</title>
      </Head>
      <HeadImage mainimage={awaitingbanner} />
      <p className={ProgStyles.headingprimarysub}>
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/admissions">Admissions/</Link>
        <Link href="/admissions/visitus">Visit Us</Link>
      </p>
      <div>
        <div className={standardStyles.row}>
          {schools.map((school) => {
            return (
              <>
                <div className={standardStyles.col1of2}>
                  <div key={school.id}>
                    <ul>
                      <li>
                        {" "}
                        <h2> {school.school_name}</h2>{" "}
                      </li>
                      {/* <li>{school.address} </li>
                        <li>{campus.city} </li> */}
                    </ul>
                    <Image
                      src={school.school_image}
                      alt="Image of campus"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
visitus.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default visitus;
