import SideNav from '../NavComponents/SideNav';
import styles from '../../styles/PageWithSideNav.module.scss';
export default function SideNavOnlyLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideNav show={true} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
