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
  SuccessMainLinks,
  FEATURED_NEWS,
} from "../HomeComponents/homeLinks";
import { useRouter } from "next/router";

import { useState } from "react";
import Button from "../Button";
import SuccessSlider from "../Slider";
import CarouselSuccess from "../Carousel";
import ButtonLink from "./ButtonLink";
import { useEffect } from "react";
import { useRef } from "react";
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
  const [selectedSuccess, setSelectedSuccess] = useState(null);
  const router = useRouter(); // Get the router object
  const secondSelectRef = useRef(null);

  const handleSuccessSelect = (selectedItem) => {
    setSelectedSuccess(selectedItem);
  };

  const changeOption = (e) => {
    setoptions(e.target.value);
    setinterested(
      schoolOptions.find((intr) => intr.name === e.target.value)
        .interestedChoice
    );
  };
  const handleButtonClick = (e) => {
    // Get the selected value from the second select
    const selectedOption = secondSelectRef.current.value;

    // Find the corresponding route for the selected option in the interestedChoice array
    const selectedInterestObj = interested.find(
      (option) => option.name === selectedOption
    );

    if (selectedInterestObj && selectedInterestObj.route) {
      router.push(selectedInterestObj.route); // Use router.push() for navigation
    }
  };

  useEffect(() => {
    const defaultSchool = schoolOptions[0]; // Change this to the desired default option
    const defaultInterest = defaultSchool.interestedChoice[0].name; // Get the first interest choice
    setSelectedSuccess(SuccessLinks[0]);
    setinterested(defaultSchool.interestedChoice);
  }, []);
  return (
    <>
      <section className={HomeStyles.homeContainer}>
        <section className={HomeStyles.sectionOne}>
          <div className={HomeStyles.sectionOneLeft}>
            <div className={HomeStyles.sectionLeftTop}>
              <h2>
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
                  <select
                    ref={secondSelectRef}
                    className={HomeStyles.selectDropDown}
                  >
                    {interested.map((opt, index) => (
                      <option key={index} value={opt.name}>
                        {opt.name}
                      </option>
                    ))}
                  </select>
                  <FaAngleDown className={HomeStyles.Arrow} />
                </div>

                <button
                  className={HomeStyles.selectButton}
                  onClick={handleButtonClick}
                >
                  {" "}
                  Submit
                </button>

                {/* <Button
                  click={handleButtonClick}
                  backgroundColor="rgb(67, 63, 64, 0.9)"
                  textcolor="white"
                  text="Submit"
                /> */}
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
          <h1>
            <span>Why</span> COSTAATT ?
          </h1>
          <div className={HomeStyles.sectionTwoGrid}>
            <p className={HomeStyles.ourSchoolsText}>
              Choosing COSTAATT is an excellent decision for your educational
              journey. With a rich history of academic excellence and a
              commitment to nurturing diverse talents, COSTAATT provides a
              dynamic and inclusive learning environment that empowers students
              to reach their full potential. Our institution offers a wide range
              of programs and pathways tailored to meet the ever-evolving
              demands of the job market, ensuring that graduates are
              well-prepared for successful careers.
            </p>{" "}
            {/* replace with flagship programmes */}
            {TILES_INFO.map((tile, index) => {
              return (
                <div key={index} className={HomeStyles.schoolTile}>
                  <Link href={`${tile.path}`}>
                    <SchoolTile
                      title={tile.title}
                      img={tile.img}
                      className={HomeStyles.schoolTileTitle}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <section id="events" className={HomeStyles.sectionThree}>
          <h1 className={HomeStyles.eventHeading}>
            <span>Events </span> at COSTAATT
          </h1>
          <div className={HomeStyles.sectionThreeTiles}>
            {EVENTS.map((tile, index) => {
              return (
                <div key={index}>
                  <Link href={`${tile.path}`}>
                    <EventTile
                      title={tile.title}
                      img={tile.image}
                      date={tile.date}
                      desc={tile.desc}
                      time={tile.time}
                      topic={tile.topic}
                      location={tile.location}
                    />{" "}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <section id="news" className={HomeStyles.sectionFour}>
          <h1 className={HomeStyles.newsHeading}>
            The amazing things We Do <span>News</span>
          </h1>
          {/* <div className={HomeStyles.featuredNews}>
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
          </div> */}
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
            backgroundColor="rgb(255, 109, 10)"
            textcolor="white"
            text={"More News..."}
          />
        </section>

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
      </section>
    </>
  );
};

export default Home;
