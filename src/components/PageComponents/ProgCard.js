import React from 'react'
import HomeStyles from "../../styles/Home.module.scss"
import CardStyle from "../../styles/ProgCard.module.scss"
import Grid from "../../styles/Programmes.module.scss"
import Image from "next/image"


const ProgCard =({photo,degreeTitle,campus,fulltime,parttime,startdate1,startdate2,level}) => {
  return (

    <>
        
          <div className ={CardStyle.progGridConthree}>
            <div className={CardStyle.progGridthree}>
               <Image className={CardStyle.imgstyle} src={photo} alt="page image" />
               {/* <div className={CardStyle.bannerbottomBsc}> Bachelors</div> */}

            </div>

           <div className={CardStyle.progGridthree}>
            <div className={CardStyle.coursetitle}>{degreeTitle}</div> {/*dynamic content}*/}
            <div className={CardStyle.block}>
             <p className={CardStyle.cardtext}> {campus}</p>   {/* fixed */}
             <p className={CardStyle.cardtextIn}>{fulltime} years full time</p> {/*dynamic content}*/}
             <p className={CardStyle.cardtextIn}>{parttime} years part-time</p> {/*dynamic content}*/}

            </div>
             
           {/* <div className={CardStyle.bannerbottomAas}> Associate</div> */}
            </div>

            <div className={CardStyle.progGridthree}>
              <div className={CardStyle.block2}>
                  <p className={CardStyle.cardtextIn}> Entry Dates</p>   {/* fixed */}
                  <p className={CardStyle.cardtext}>{startdate1}</p> {/*dynamic content}*/}
                  <p className={CardStyle.cardtext}>{startdate2}</p> {/*dynamic content}*/}
              </div>
              {/* <div className={CardStyle.bannerbottomDip}> Certificate</div> */}

            </div>
          </div>

          <div className={CardStyle.bannerbottom}>  {level} </div>


    </>
    
  )
}

export default ProgCard