'use client'
import React from 'react'

import Image from 'next/image';
import PopupStyles from "../../styles/Popup.module.scss"
import standardStyles from "../../styles/Popup.module.scss";

import photo from "../../../public/images/Leadership photos/Naseem-Koylass.jpg"


const BioModal = ({open}) => {

    if(!open) return null;

     return (
    <>

    <h1>Hello World !!!</h1>


  <div  >
        <div >
          <div >
            {/* <Image
              src={fe.photo}
              alt={fe.altText}
              className={PopupStyles.popup__img}
            /> */}
              <Image
              src={photo}
              alt="Naseem photo"
              className={PopupStyles.popup__img}
              
            />
          </div> 
         <div >
            <h2 className={standardStyles.headingSecondary}>
                
                Vice President, Academic Affairs
                {/* {fe.position} */}
                
                
                </h2>
            <h3
            //   className={`${standardStyles.headingSecondary} $standardStyles.marginBottomSmall}`}
            >
              {/* {fe.name}{" "} */}
                  Naseem Koylass
                  {" "}
            </h3>
            <p >
                     Dr. Naseem Koylass was appointed to the position of Vice President, Academic Affairs effective July 1, 2022.Dr. Koylass is a long-standing member of the COSTAATT community and has held a wide range of leadership positions over the last 20 years, including department chair, campus dean and more recently, Associate Vice President, Academic Affairs.Dr Koylass has played a critical role in the College's accreditation and quality assurance activities since COSTAATT was first established in October 2000, and brings to her new position a wealth of knowledge and experience in academic and administrative leadership

                
                
                {/* {fe.bio}  */}
                
                
                </p>
          </div>
        </div>
        </div>  
    </>
  );
}

export default BioModal