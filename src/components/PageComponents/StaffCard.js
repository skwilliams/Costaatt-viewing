import React from 'react'
import StaffStyle from "../../styles/StaffDeptCard.module.scss";


const StaffCard = ({name, position,phone,email}) => {
  return (
    <>
      <div className={StaffStyle.cardCont}>
        {name && <p className={StaffStyle.name}>{name}</p>}
        {position && <p className={StaffStyle.position}>{position}</p>}
        {phone && <p className={StaffStyle.tel}> {phone}</p>}
        {/* figure out mail to  */}
        {email && (
          <a className={StaffStyle.email} href={`mailto:${email}`}>
            {"  "}
            {email}
          </a>
        )}
      </div>
    </>
  );
}

export default StaffCard