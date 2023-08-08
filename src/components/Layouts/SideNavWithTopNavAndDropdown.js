import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Header from '../NavComponents/Header';
import Footer from '../Footer';
import SideNav from '../NavComponents/SideNav';
import styles from '../../styles/PageWithSideNav.module.scss';
import Subheader from '../NavComponents/Subheader';

export default function SideNavWithTopNavAndDropdownLayout({ children }) {
  const navRef = useRef();
  const [showSubNav, setShowSubNav] = useState(false);

  useEffect(() => {
    const updateShowSubNav = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const navHeight = navRef.current.getNavHeight();
      const hideNav = scrollTop >= navHeight ? true : false;
      setShowSubNav(hideNav);
    };
    window.addEventListener('scroll', updateShowSubNav);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateShowSubNav);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header ref={navRef} />
        <Subheader show={showSubNav} />
      </div>
      <div className={styles.sidebar}>
        <SideNav show={true} />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
