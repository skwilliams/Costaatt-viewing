import NewsTile from "@/components/HomeComponents/NewsTile";
import NewsStyle from "../../styles/News.module.scss";

import Link from "next/link";
import React from "react";
import NewsSlider from "../../components/Slider";
import { NEWS } from "@/components/HomeComponents/homeLinks";
import Button from "@/components/Button";
const News = () => {
  return (
    <div className={NewsStyle.mainPageContainer}>
      <h1 className={NewsStyle.mainTitle}>Costaatt News</h1>
      <div className={NewsStyle.newsTop}>
        <div className={NewsStyle.newsSlider}>
          <NewsSlider slides={NEWS} />
        </div>
        <div className={NewsStyle.featuredNews}>
          <h1>Featured News</h1>
          {NEWS.map((news, index) => (
            <div key={index} className={NewsStyle.featuredNewsLinks}>
              <Link href={"#"}>
                <p>{news.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={NewsStyle.latestNews}>
        <h1 className={NewsStyle.latestNewsTitle}>Latest News</h1>
        <div className={NewsStyle.newsGrid}>
          {NEWS.map((tile, index) => {
            return (
              <>
                <div key={index} className={NewsStyle.newsGrid2}>
                  <Link href={`/news/${tile.id}`}>
                    <NewsTile
                      title={tile.title}
                      img={tile.image}
                      date={tile.date}
                      desc={tile.desc}
                      time={tile.time}
                      topic={tile.topic}
                      location={tile.location}
                    />
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <Button
          href="#"
          text="More News..."
          backgroundColor="ORANGE"
          textcolor="white"
        />
      </div>
    </div>
  );
};

export default News;
