import React from 'react';
import Head from 'next/head';
import HeadImage from '@/components/PageComponents/HeadImage';
import alumniimage from '../../public/images/alumniHeader.jpg';
import HomeStyles from '../styles/Home.module.scss'
import standardStyles from "@/styles/main.module.css"



import {
  SliderLinks,
  SuccessSlider,
  CarouselSuccess,
  TILES_INFO,
  EVENTS,
  NEWS,
  schoolOptions,
  SuccessLinks,
  SuccessMainLinks,
  FEATURED_NEWS,
} from "../components/HomeComponents/homeLinks";

const alumni = () => {
  return (
    <>
      <header className={standardStyles.rentHeader}>

        <Head>
          <title>Alumni </title>
        </Head>
        <HeadImage mainimage={alumniimage} />
      </header>

      <section id="success-stories" className={HomeStyles.successSection}>
        <div className={HomeStyles.successStories}>
          <h1>Success Stories</h1>
        </div>
  
      </section>

      <div>alumni</div>
    </>
  );
};

export default alumni;
