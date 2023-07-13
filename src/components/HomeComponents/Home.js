import logo from "../../../images/Links/costaatLogoBlack.png";
import HomeStyles from "../../styles/Home.module.scss";
import HomeSlider from "../Slider";
import SuccessSlider from "../Slider";

import EventTile from "./EventTile";
import SchoolTile from "./SchoolTile";
import NewsTile from "./NewsTile";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import {
  SliderLinks,
  TILES_INFO,
  EVENTS,
  NEWS,
  iAmInterested,
  schoolOptions,
  SuccessLinks,
} from "../HomeComponents/homeLinks";
import { useState } from "react";
import Button from "../Button";
import Slider from "../Slider";

/**This component renders the home page which is called <Landing /> in index.js
 *
 * It is seperated into sections with each Section givin its own className: Section One etc
 * Components include....HomeSlider, Event TIle
 *
 *
 */
const Home = () => {
  const [options, setoptions] = useState("");
  const [interested, setinterested] = useState([]);

  const changeOption = (e) => {
    const getName = e.target.name;
    console.log(getName);
    setoptions(e.target.value);

    setinterested(
      schoolOptions.find((intr) => intr.name === e.target.value)
        .interestedChoice
    );
  };
  return (
    <>
      <section className={HomeStyles.homeContainer}>
        <section className={HomeStyles.sectionOne}>
          <div className={HomeStyles.sectionOneLeft}>
            {/* <Link href="/">
              <Image
                src={logo}
                alt="costaatt logo"
                className={HomeStyles.logo}
              />
            </Link> */}
            {/* <p>
              The College of Science Technology <br /> and Applied Arts of
              Trinidad and Tobago
            </p> */}
            {/* <h1>The Freedom to Dream</h1>
            <h1>The Environment to Thrive</h1>
            <h1>The Technology to Win</h1> */}
            <h2>Write your own story</h2>

            <div className={HomeStyles.selectContainer}>
              <h3>I am</h3>
              <div className={HomeStyles.innerSelectContainer}>
                <select
                  onChange={changeOption}
                  className={HomeStyles.selectDropDown}
                >
                  {schoolOptions.map((opt) => (
                    <option key={opt.name} value={opt.name}>
                      {opt.name}
                    </option>
                  ))}
                </select>
                <FaAngleDown className={HomeStyles.Arrow} />
              </div>

              <h3>I Interested in</h3>
              <div className={HomeStyles.innerSelectContainer}>
                <select className={HomeStyles.selectDropDown}>
                  {interested.map((opt) => (
                    <>
                      <option key={opt.name} value={opt.name}>
                        {opt.name}
                      </option>
                    </>
                  ))}
                </select>
                <FaAngleDown className={HomeStyles.Arrow} />
              </div>
              <Button
                href="news"
                backgroundColor="rgb(179,93,16)"
                textcolor="white"
                text="Submit"
              />
            </div>
          </div>
          <div className={HomeStyles.sectionOneRight}>
            <HomeSlider slides={SliderLinks} />
          </div>
        </section>

        <section className={HomeStyles.sectionTwo}>
          <div className={HomeStyles.ourSchoolsText}>
            <h1>
              Our <br />
              Schools
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              vel reiciendis in delectus aliquid perspiciatis quidem mollitia
              officia praesentium optio repellat, nihil placeat! Labore tempore
              ipsa illum ipsam minima! Ad Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore vel reiciendis in delectus aliquid
              perspiciatis quidem mollitia officia praesentium optio repellat,
              nihil placeat! Labore tempore ipsa illum ipsam minima! Ad!illum
              ipsam minima! Ad!
            </p>
          </div>
          {TILES_INFO.map((tile, index) => {
            return (
              <div key={index}>
                <Link href={`${tile.url}`}>
                  <SchoolTile title={tile.title} img={tile.img} />
                </Link>
              </div>
            );
          })}
        </section>

        <section className={HomeStyles.sectionThree}>
          <h1 className={HomeStyles.eventHeading}>
            <span>Events </span> at COSTAATT
          </h1>
          <div className={HomeStyles.sectionThreeTiles}>
            {EVENTS.map((tile, index) => {
              return (
                <div key={index}>
                  <EventTile
                    title={tile.title}
                    img={tile.image}
                    date={tile.date}
                    desc={tile.desc}
                    time={tile.time}
                    topic={tile.topic}
                    location={tile.location}
                  />
                </div>
              );
            })}
          </div>
        </section>
        <section className={HomeStyles.sectionFour}>
          <h1 className={HomeStyles.newsHeading}>
            Latest <span>News</span>
          </h1>
          <div className={HomeStyles.sectionFourTiles}>
            {NEWS.map((tile, index) => {
              return (
                <div key={index} className={HomeStyles.newsTileHomepage}>
                  <Link href="news">
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
              );
            })}
          </div>
          <Button
            href="news"
            backgroundColor="rgb(173, 93, 16)"
            textcolor="white"
            text={"More News..."}
          />
        </section>

        <section className={HomeStyles.successSection}>
          <div className={HomeStyles.successStories}>
            <h1>Success Stories</h1>
            <p>
              Have a big question. Get some answers from people who are studying
              right here, right now.
            </p>

            {/* <HomeSlider slides={SliderLinks} /> */}
            {/* <Button
              href="news"
              textcolor="white"
              backgroundColor="rgb(173, 93, 16)"
              text="Meet a Student"
            /> */}
          </div>
          <div className={HomeStyles.successSlider}>
            <SuccessSlider slides={SuccessLinks} />
          </div>
        </section>
      </section>
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Home;
