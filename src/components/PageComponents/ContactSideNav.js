import React from "react";
import SideNavCon from "../../styles/ContactSideNav.module.scss";
const ContactSideNav = ({
  btn1txt,
  btn2txt,
  btn3txt,
  contacttype,
  contactArr,
}) => {
  return (
    <>
      <div className={SideNavCon.sidenavcontact}>
        <button className={SideNavCon.sidenavbutton}>{btn1txt}</button>

        <button className={SideNavCon.sidenavbutton}>{btn2txt}</button>
        <button className={SideNavCon.sidenavbutton}>{btn3txt}</button>
        <p>{contacttype}</p>
        <div className={SideNavCon.sidenavContactContainer}>
          {contactArr.map((contact) => {
            return (
              <div
                className={SideNavCon.sidenavContactItem}
                key={contact.handle}
              >
                <p className={SideNavCon.name}>{contact.name}</p>
                <p className={SideNavCon.tel}>{contact.phone}</p>
                <a
                  className={SideNavCon.email}
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* <a className="email" href="mailto:cbernard@costaatt.edu.tt">cbernard@costaatt.edu.tt</a> */}
    </>
  );
};

export default ContactSideNav;
