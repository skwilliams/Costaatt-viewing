
import React
 from "react";
 import Link from "next/link";
 import Image from "next/image";
 import errorStyles from "@/styles/Error404.module.scss"
 import pagepeel from "../../public/images/errorPage/Page_Peel.png"
 import hole from "../../public/images/errorPage/Hole.png";
 import scaredman from "../../public/images/errorPage/Scared_Man.png";
 import Layout1 from "../components/Layouts/TopNavOnly_NoDropdown";



export default function NotFound() {
  return (
    <>
      <section className={errorStyles.header}>
        <Image
          src={pagepeel}
          alt="Page"
          className={errorStyles.header__pagePeel}
        />
        <Image
          src={hole}
          alt="Hole in ground"
          className={errorStyles.header__hole}
        />
        <Image
          src={scaredman}
          alt="Scared_Man"
          className={errorStyles.header__pers}
        />

        <div className={errorStyles.header__buttonBox}>
          <Link
            href="/"
            className={`${errorStyles.btn} ${errorStyles.btn__animated}`}
          >
            Click to Peel
            <br />
            Back to Home
          </Link>
        </div>

        <div>
          <span
            className={`${errorStyles.header__404Box} ${errorStyles.header__404}`}
          >
            404
          </span>
        </div>

        <div className={errorStyles.header__textBox}>
          <h1 className="heading_primary">
            <span className={errorStyles.heading_primary__main}>Not found</span>
            <span className={errorStyles.heading_primary__sub}>
              Only a hole in the linking tracks
            </span>
          </h1>
        </div>
      </section>
    </>
  );
  
}
NotFound.getLayout = function getLayout(page) {
  return <Layout1>{page}</Layout1>;
};