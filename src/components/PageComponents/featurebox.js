import React from 'react'
import standardStyles from "../../styles/main.module.scss"

const featurebox = ({icon},{heading},{text}) => {
  return (
    <>
      <div className={standardStyles.featurebox}>
        <IconContext.Provider value={standardStyles.featurebox__icon}>
          {" "}
          <FiBookOpen value={standardStyles.featurebox__icon} />
        </IconContext.Provider>
        <h3 className={standardStyles.headingcards}>{heading} </h3>
        <p className={standardStyles.featurebox__text}>
          {text}
        </p>
      </div>
    </>
  );
}

export default featurebox