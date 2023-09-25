import React from 'react'
import standardStyles from "../../styles/main.module.scss"

const featurebox = ({icon},{heading},{text}) => {
  return (
    <>
      <div className={standardStyles.featurebox}>
        {icon}
        <h3 className={standardStyles.headingTertiary}>
            {heading} </h3>
        <p className="featurebox__text">{text}</p>
      </div>
    </>
  );
}

export default featurebox