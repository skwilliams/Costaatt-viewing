import React from "react";
import GradStyle from "../../styles/GradsSpeak.module.scss";
import ReactPlayer from "react-player";
import { useState } from "react";
import { useEffect } from "react";




const GradsSpeak = ({ graduate }) => {

//video is taking long to load, need to check..

 const [hasWindow, setHasWindow] = useState(false);
 useEffect(() => {
   if (typeof window !== "undefined") {
     setHasWindow(true);
   }
 }, []);



  return (
    <>
      {graduate.map((grad) => (
        <div className={GradStyle.gradcont}>
          <>
              <div className={GradStyle.video}>
              {grad.video && (
                hasWindow && <ReactPlayer height="320px" width="270px" url={grad.video} />
              )}
            </div>  

            {grad.name && <div className={GradStyle.name}>{grad.name}</div>}
            {grad.placeofwork && (
              <div className={GradStyle.placeofwork}>{grad.placeofwork}</div>
            )}
            {grad.words && <div className={GradStyle.says}>{grad.words} </div>}
          </>
        </div>
      ))}
    </>
  );
};

export default GradsSpeak;
