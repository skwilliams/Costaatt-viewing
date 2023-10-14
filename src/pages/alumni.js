import React from 'react';
import Head from 'next/head';
import HeadImage from '@/components/PageComponents/HeadImage';
import alumniimage from '../../public/images/alumniHeader.jpg';
import HomeStyles from '@/styles/Home.module.scss'
import {
  SliderLinks,
  TILES_INFO,
  EVENTS,
  NEWS,
  schoolOptions,
  SuccessLinks,
  SuccessMainLinks,
  FEATURED_NEWS,
} from "../HomeComponents/homeLinks";

const alumni = () => {
  return (
    <>
      <Head>
        <title>Alumni </title>
      </Head>
      <HeadImage mainimage={alumniimage}/>

      <section id="success-stories" className={HomeStyles.successSection}>
        <div className={HomeStyles.successStories}>
          <h1>Success Stories</h1>
        </div>
        <div className={HomeStyles.successSlider}>
          <SuccessSlider
            slides={selectedSuccess ? [selectedSuccess] : SuccessMainLinks}
          />
          <CarouselSuccess
            story={SuccessLinks}
            onSelect={handleSuccessSelect}
          />
        </div>
      </section>

      <div>alumni</div>
    </>
  );
};

export default alumni;
