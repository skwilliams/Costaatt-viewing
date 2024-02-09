import React from "react";
import styles from "./Testimonial.module.scss"; // Import the Sass module for styles
import Image from "next/image";
import image from "../../../public/images/costaattlife/joinclub.png"

const Testimonial = () => {
  return (
    <>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialContent}>
          <h2 className={styles.header}>COSTAATT VOICES</h2>
          <h3 className={styles.subHeader}>From the Source</h3>

          <blockquote className={styles.quote}>
            <span className={styles.quoteSymbol}> &ldquo;</span> "It's a great
            culture here we've built at COSTAATT, and being the starting
            quarterback here means you can lead a really good football team.
            It's a great place to play"
          
          </blockquote>
          <cite className={styles.cite}>
            — Joe Repetti '25, Business Administration Major
          </cite>
          <button className={styles.readMore}>READ JOE'S STORY</button>
        </div>
        <div className={styles.testimonialImage}>
          {/* Image component for the player - for example purposes, using an img tag */}
          <Image
            className={styles.imgDetails}
            src={image}
            width="150"
            height="300"
            alt="Football Player"
          />
          {/* Additional content goes here */}
          <ul className={styles.testimonialList}>
            {/* List of testimonials */}
            <li>Joe Repetti '25</li>
            <li>Peter James '21</li>
            <li>Kerry Ling '25</li>
            <li>Garvin Mark'25</li>
            <li>Joe Repetti '25</li>
            {/* ... other list items */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
