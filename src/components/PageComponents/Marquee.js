import React, {useEffect} from "react";


// import { useEffect} from "react";

// Import CSS module for styling

import styles from "../../styles/Marquee.module.scss"



const Marquee = ({ text }) => {
  useEffect(() => {
    const marquee = document.querySelector(".marquee");
    const inner = document.querySelector(".inner");

    if (marquee && inner) {
      const handleAnimationIteration = () => {
        marquee.appendChild(inner.cloneNode(true)); // Clone the inner element to keep the scrolling indefinitely
      };

      marquee.addEventListener("animationiteration", handleAnimationIteration);

      return () => {
        marquee.removeEventListener(
          "animationiteration",
          handleAnimationIteration
        ); // Cleanup event listener
      };
    }
  }, []);

  return (
    <div className={styles.marquee}>
      <div className={styles.inner}>
        <span><h2> {text} </h2></span>
      </div>
    </div>
  );
};

export default Marquee;
