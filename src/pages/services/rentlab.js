import React from "react";
import Image from "next/image";
// Icons for Flags
import English from "../../../public/images/servicesPhoto/flagEngland.svg";

import Spanish from "../../../public/images/servicesPhoto/flagSpain.svg";

import German from "../../../public/images/servicesPhoto/flagGermany.svg";

import Dutch from "../../../public/images/servicesPhoto/flagDutch.svg";

import French from "../../../public/images/servicesPhoto/flagFrance.svg";
import Portugues from "../../../public/images/servicesPhoto/flagPortugal.svg";

import standardStyles from "../../styles/main.module.scss";

import LanguageStyles from "../../styles/LanguageCard.module.scss";

const rentlab = () => {
  return (
    <section id="translate" className={LanguageStyles.languageCard}>
      <h3 className={standardStyles.translateHeading}>
        COSTAATT <span> Translates </span> services
      </h3>

      <ul>
        <li style={{ backgroundColor: "#6710F5" }}>
          <div className={LanguageStyles.icon}>
            <Image
              src={German}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />{" "}
          </div>
          <div className={LanguageStyles.title}>German</div>
          <div className={LanguageStyles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            impedit?
          </div>
        </li>
      </ul>
    </section>
  );
};

export default rentlab;
