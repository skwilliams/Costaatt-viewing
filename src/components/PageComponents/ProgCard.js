import React from 'react'
import CardStyle from "../../styles/ProgCard.module.scss"
import Image from "next/image"


const ProgCard =({courses}) => {
  return (
    <>
      <div className={CardStyle.progGridConthree}>
        {courses?.map((cou) => (
          <>
            <div className={CardStyle.progGridthree}>
              <Image
                className={CardStyle.imgstyle}
                src={cou.photo}
                alt={cou.alttext}
                width="200"
                height="200"
              />
              {/* <div className={CardStyle.bannerbottomBsc}> Bachelors</div> */}
            </div>
            <div className={CardStyle.progGridthree}>
              <div className={CardStyle.coursetitle}>{cou.degreeTitle}</div>{" "}
              {/*dynamic content}*/}
              <div className={CardStyle.block}>
                <p className={CardStyle.cardtext}> {cou.campus}</p>{" "}
                {/* fixed */}
                <p className={CardStyle.cardtextIn}>
                  {cou.fulltime} years full time
                </p>{" "}
                {/*dynamic content}*/}
                <p className={CardStyle.cardtextIn}>
                  {cou.parttime} years part-time
                </p>{" "}
                {/*dynamic content}*/}
              </div>
              {/* <div className={CardStyle.bannerbottomAas}> Associate</div> */}
            </div>

            <div className={CardStyle.progGridthree}>
              <div className={CardStyle.block2}>
                <p className={CardStyle.cardtextIn}> Entry Dates</p>{" "}
                {/* fixed */}
                <p className={CardStyle.cardtext}>{cou.startdate1}</p>{" "}
                {/*dynamic content}*/}
                <p className={CardStyle.cardtext}>{cou.startdate2}</p>{" "}
                {/*dynamic content}*/}
              </div>
              {/* <div className={CardStyle.bannerbottomDip}> Certificate</div> */}
            </div>

            <div className={CardStyle.bannerbottom}> {cou.level} </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ProgCard