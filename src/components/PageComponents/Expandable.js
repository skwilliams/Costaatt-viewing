import React, { startTransition, useState } from 'react'
import standardStyles from "@/styles/main.module.scss"


const Expandable = ({children,maxChars=150}) => {

let{expanded,setExpanded}=useState(true)



if (children.length<= maxChars)
  return <p className={standardStyles.paragraph}> {children}</p>;


const text = expanded ? children.substring(0,maxChars) : children

  return (
    <>

    <p className={standardStyles.paragraph}>{text}...</p>
    <button onClick = { ()=>setExpanded(!expanded) }>{expanded? "Read more": "Read less"}</button>
  </>
  )
  
}

export default Expandable