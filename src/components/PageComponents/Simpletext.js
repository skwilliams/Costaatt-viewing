import React from 'react'

const Simpletext = ({id,sectionclass,classname,title,text}) => {
  return (
    <>
    <section id ={id} className={sectionclass}>
      <div className={classname}>
        <p>{title}</p>
        <p>{text}</p>

      </div>

    </section>
   
     
  
    </>
  )
}

export default Simpletext