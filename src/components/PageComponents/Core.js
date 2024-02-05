import React from 'react'
import CoreStyles from "../../styles/Core.module.scss"

const Core = ({text}) => {
  return (
   <div className={CoreStyles.container}> {text} </div>

  )
}

export default Core