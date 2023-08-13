import React from "react";
import AdminStyles from "../../styles/Admissions.module.scss";
import Link from 'next/link'


const SimpleCard = ({text, linkpage }) => {


  return (
    <>
        <Link href={linkpage} className={AdminStyles.link}>
          <div className={AdminStyles.cardCon}>
            <p className={AdminStyles.cardtext}> {text}</p>
          </div>
        </Link>
    </>
  );
  
};

export default SimpleCard;
