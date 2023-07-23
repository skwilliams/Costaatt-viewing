import React from 'react'
import Image from 'next/image'
import DeptStyles from '../../styles/Department.module.scss'


const StudentResources = ({image,imagetxt}) => {
  return (
    <>
      <div className={DeptStyles.studCont}>
        <Image
          className={DeptStyles.img}
          src={image}
          width="200"
          height="200"
          alt="page image"
        />
        <div className={DeptStyles.textblock}>{imagetxt}</div>
      </div>
      
    </>
  );
}

export default StudentResources




