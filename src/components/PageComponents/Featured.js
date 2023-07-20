
import React from 'react'
import FeatStyle from '../../styles/Featured.module.scss'
import Link from "next/link"
import Image from 'next/image'


const Featured = ({feat}) => {
  
  return (
    <>
      <div className={FeatStyle.gridContwo}>
        {feat.map((fe)=> (
        <>   
        <div className={FeatStyle.gridtwo}>
          <Image
            className={FeatStyle.imgstyle}
            src={fe.photo}
            alt={fe.altText}
            width="200"
            height="200"
            // margin="20px"
          />
        </div>
        <div className={FeatStyle.gridtwo}>
          <div className={FeatStyle.title}>{fe.title}</div>

          <p className={FeatStyle.text}> {fe.text}</p>
          <Link className={FeatStyle.goto} href={fe.link}>
            {" "}
            View More...{" "}
          </Link>       
          </div>     
        </>    
        
        ))}
        
      </div>
    </>
  );
}

export default Featured