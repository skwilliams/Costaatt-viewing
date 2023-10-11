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
        <h3 className={standardStyles.headingcards}>Culture </h3>
        <p className={standardStyles.featurebox__text}>
          Enjoy learning about Culture ? <br /> Immense youself in Caribbean
          culture and the multicultural environment of Trinidad and Tobago.
        </p>
      </div>
    </>
  );
}

export default featurebox