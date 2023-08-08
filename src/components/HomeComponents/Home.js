import logo from "../../../images/Links/costaattlogographic.png";
import HomeStyles from "../../styles/Home.module.scss";
import HomeSlider from "../Slider";
import EventTile from "./EventTile";
import SchoolTile from "./SchoolTile";
import NewsTile from "./NewsTile";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import {
  SliderLinks,
  TILES_INFO,
  EVENTS,
  NEWS,
  schoolOptions,
  SuccessLinks,
  FEATURED_NEWS,
} from "../HomeComponents/homeLinks";
import { useState } from "react";
import Button from "../Button";
// import Slider from "../Slider";
import CarouselSuccess from "../Carousel";

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
            <div className={HomeStyles.sectionLeftTop}>
              <h2>
                {" "}
                The College of Science Technology and Applied Arts of Trinidad
                and Tobago
              </h2>
            </div>
            <div className={HomeStyles.sectionLeftBottom}>
              <div className={HomeStyles.selectContainer}>
                <h3>I am</h3>
                <div className={HomeStyles.innerSelectContainer}>
                  <select
                    onChange={changeOption}
                    className={HomeStyles.selectDropDown}
                  >
                    {schoolOptions.map((opt, index) => (
                      <option key={index} value={opt.name}>
                        {opt.name}
                      </option>
                    ))}
                  </select>
                  <FaAngleDown className={HomeStyles.Arrow} />
                </div>

                <h3>Interested in</h3>
                <div className={HomeStyles.innerSelectContainer}>
                  <select className={HomeStyles.selectDropDown}>
                    {interested.map((opt, index) => (
                      <>
                        <option key={index} value={opt.name}>
                          {opt.name}
                        </option>
                      </>
                    ))}
                  </select>
                  <FaAngleDown className={HomeStyles.Arrow} />
                </div>
                <Button
                  href="news"
                  backgroundColor="rgb(67, 63, 64, 0.9)"
                  textcolor="white"
                  text="Submit"
                />
              </div>
            </div>{" "}
            {/*end of left bottom */}
          </div>{" "}
          {/*end of left container */}
          <div className={HomeStyles.sectionOneRight}>
            <HomeSlider slides={SliderLinks} />
          </div>
        </section>

        <section id="schools" className={HomeStyles.sectionTwo}>
          <div className={HomeStyles.ourSchoolsText}>
            <h2>Our Schools</h2>
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

        <section id="events" className={HomeStyles.sectionThree}>
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

        <section id="news" className={HomeStyles.sectionFour}>
          <h1 className={HomeStyles.newsHeading}>
            Latest <span>News</span>
          </h1>
          <div className={HomeStyles.featuredNews}>
            {FEATURED_NEWS.map((tile, index) => {
              return (
                <div>
                  <Link href="news">
                    <NewsTile
                      title={tile.title}
                      img={tile.image}
                      date={tile.date}
                    />{" "}
                  </Link>
                </div>
              );
            })}
          </div>
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

        <section id="success-stories" className={HomeStyles.successSection}>
          <div className={HomeStyles.successStories}>
            <h1>Success Stories</h1>
            <p>
              Have a big question. Get some answers from people who are studying
              right here, right now.
            </p>
          </div>
          <CarouselSuccess story={SuccessLinks} />
          {/* <div className={HomeStyles.successSlider}>
            <SuccessSlider slides={SuccessLinks} />
          </div> */}
        </section>
      </section>
    </>
  );
};

export default Home;
