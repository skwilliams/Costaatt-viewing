
import React from 'react'
import FeatStyle from '../../styles/Featured.module.scss'
import Link from "next/link"
import Image from 'next/image'

const Featured = (photo,altText,title,text,goto) => {
  return (
    <>
      <div className={FeatStyle.gridContwo}>
        <div className={FeatStyle.gridtwo}>
          <Image
            className={FeatStyle.imgstyle}
            src={photo}
          
            alt={altText}
           
            width="200"
            height="200"
            // margin="20px"
          />
        </div>
        <div className={FeatStyle.gridtwo}>
          <div className={FeatStyle.title}>{title}</div>

          <p className={FeatStyle.text}> {text}</p>
          {/* <Link className={FeatStyle.goto} href={goto}>  View More...  </Link> */}
        </div>
      </div>
    </>
  );
}

export default Featured