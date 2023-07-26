import React from "react";
import GradStyle from "../../styles/GradsSpeak.module.scss";
import ReactPlayer from "react-player";



const GradsSpeak = ({ graduate }) => {
  return (
    <>
      {graduate.map((grad) => (
        <div className={GradStyle.gradcont}>
          <>
            <div className={GradStyle.video}>
              {grad.video && (
                <ReactPlayer height="320px" width="270px" url={grad.video} />
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
