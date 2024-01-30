// components/BackToTopButton.js
import Image from "next/image";
import arrow from "../../../public/images/scrollarrow.svg"

import { useEffect, useState } from "react";

import styles from "../../styles/BackToTop.module.scss";

const BackToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.backToTopButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <Image href={arrow}  width= "50" alt="Arrow for scroll to top"
      />
    </button>
  );
};

export default BackToTopButton;
