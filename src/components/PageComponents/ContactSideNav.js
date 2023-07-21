import React from 'react'
import SideNavCon from '../../styles/ContactSideNav.module.scss'
const ContactSideNav = ({btn1txt ,btn2txt,btn3txt ,contacttype, name ,tel ,email}) => {
 const sendto='mailto:' + {email};
  return (
    <>
      <div className={SideNavCon.sidenavcontact}>
        <button className={SideNavCon.sidenavbutton}>{btn1txt}</button>

        <button className={SideNavCon.sidenavbutton}>{btn2txt}</button>
        <button className={SideNavCon.sidenavbutton}>{btn3txt}</button>
        <p>{contacttype}</p>
        <p className={SideNavCon.name}>{name}</p>
        <p className={SideNavCon.tel}>{tel}</p>
        <a className={SideNavCon.email} href="${sendto}">
          {email}
          
        </a>         

      </div>

      {/* <a className="email" href="mailto:cbernard@costaatt.edu.tt">cbernard@costaatt.edu.tt</a> */}
    </>
  );
}

export default ContactSideNav