import React from 'react';
import Header from '../NavComponents/Header';
import Footer from '../Footer';
import SideNav from '../NavComponents/SideNav';
import styles from '../../styles/PageWithSideNav.module.scss';
export default function SideNavWithTopNavLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
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
