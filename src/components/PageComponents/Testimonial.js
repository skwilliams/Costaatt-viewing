import React from "react";
import styles from "./Testimonial.module.scss"; // Import the Sass module for styles
import Image from "next/image";
import image from "../../../public/images/successStories/person2.jpg"

const Testimonial = () => {
  return (
    <>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialContent}>
          <h2 className={styles.header}>COSTAATT VOICES</h2>
          <h3 className={styles.subHeader}>From the Source</h3>

          <blockquote className={styles.quote}>
            <span className={styles.quoteSymbol}> &ldquo;</span> "It's a great
            culture here we've built at COSTAATT, the lectures have guided me
            through every step of the way It's a great place to learn"
          </blockquote>
          <cite className={styles.cite}>
            — Jolene John, Business Administration Major
          </cite>
          <button className={styles.readMore}>READ JOLENE'S STORY</button>
        </div>

        <div className={styles.testimonialImage}>
          {/* Image component for the player - for example purposes, using an img tag */}
          <div className={styles.imgDetails}>
            <Image
              // className={styles.imgDetails}
              src={image}
              width="300"
              height="300"
              alt="Football Player"
            />
          </div>
          {/* Additional content goes here */}
          <ul className={styles.testimonialList}>
            {/* List of testimonials */}
            <li>
              <Image
                src={image}
                width="20"
                height="25"
                alt="football player"
                className={styles.imgSmall}
              />
              <p> Joelene John '22 </p>
            </li>
            <li>
              <Image
                src={image}
                width="20"
                height="25"
                alt="football player"
                className={styles.imgSmall}
              />
              <p>Joelene John '22 </p>
            </li>
            <li>
              <Image
                src={image}
                width="20"
                height="25"
                alt="football player"
                className={styles.imgSmall}
              />
              <p> Joelene John '22 </p>
            </li>
            <li>
              <Image
                src={image}
                width="20"
                height="25"
                alt="football player"
                className={styles.imgSmall}
              />
              <p> Joelene John '22 </p>
            </li>

            {/* ... other list items */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
