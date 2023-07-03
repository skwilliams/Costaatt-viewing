import styles from "../styles/Layout.module.css";
import Header from "./NavComponents/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
