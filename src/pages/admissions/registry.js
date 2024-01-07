import React from 'react'
import Head from 'next/head'
import HeadImage from '@/components/PageComponents/HeadImage'
import headerimg from "../../../public/images/awaitingBanner.png"

const registry = () => {
  return (
    <>
    
    <Head>
        <title> OFfice of the Registrar</title>
    </Head>
    <HeadImage mainimage={headerimg}/>
    <div> Office of Registrar </div>
         
         </>
  )
  
}

export default registry