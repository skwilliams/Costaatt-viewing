import React from 'react'
import SideNavCon from '../../styles/ContactSideNav.module.scss'
const ContactSideNav = ({btn1txt ,btn2txt ,contacttype, name ,tel ,email}) => {
 const sendto='mailto:' + {email};
  return (

<>


<div className={SideNavCon.sidenavcontact}>
                <button className={SideNavCon.sidenavbutton}>{btn1txt}</button>
                <button className={SideNavCon.sidenavbutton}>{btn2txt}</button>
                 <p>{contacttype}</p>
                 <p className={SideNavCon.name}>{name}</p>
                 <p className={SideNavCon.tel}>{tel}</p>
                <a className={SideNavCon.email} href={sendto.toString} >{email}</a> 
                </div>
</>

    
  )
}

export default ContactSideNav