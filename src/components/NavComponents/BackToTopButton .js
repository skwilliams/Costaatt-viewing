// components/BackToTopButton.js

import { useEffect, useState } from "react";


import styles from "../NavComponents/BackToTopButton"

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
      Back to Top
    </button>
  );
};

export default BackToTopButton;
