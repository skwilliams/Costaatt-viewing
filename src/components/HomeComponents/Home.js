import logo from "../../../images/Links/costaattlogographic.png";
import HomeStyles from "../../styles/Home.module.scss";
import standardStyles from "@/styles/main.module.scss"
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
      {/* <section className={HomeStyles.homeContainer}> */}
      <section className={HomeStyles.sectionOne}>
        <div className={HomeStyles.sectionOneLeft}>
          <div className={HomeStyles.sectionLeftTop}>
            <h2 className={HomeStyles.costName}>The College of Science Technology and Applied Arts of Trinidad and Tobago</h2>
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
                className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
                onClick={handleButtonClick}
              >
                {" "}
                Submit
              </button>
            </div>
          </div>{" "}
          {/*end of left bottom */}
        </div>{" "}
        {/*end of left container */}
        <div className={HomeStyles.sectionOneRight}>
          <HomeSlider slides={SliderLinks} />
        </div>
      </section>

      <section id="unique" className={HomeStyles.sectionTwo}>
        <h1>
          <span>Why</span> US
        </h1>
        {/* <div className={HomeStyles.sectionTwoGrid}>
          <p className={HomeStyles.ourSchoolsText}>
            Choosing COSTAATT is an excellent decision for your educational
            journey. With a rich history of academic excellence and a commitment
            to nurturing diverse talents, COSTAATT provides a dynamic and
            inclusive learning environment that empowers students to reach their
            full potential. Our institution offers a wide range of programs and
            pathways tailored to meet the ever-evolving demands of the job
            market, ensuring that graduates are well-prepared for successful
            careers.
          </p>{" "}
          {/* replace with flagship programmes */}
        {/* {TILES_INFO.map((tile, index) => {
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
        </div> */}
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picturelabs}`}
                >
                  &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan} ${standardStyles.card__headingSpan_mainColor}`}
                  >
                    Rental Facilities{" "}
                  </span>
                </h4>
                <div className={standardStyles.card__details}>
                  <ul>
                    <li>Science Labs</li>
                    <li>Board Room</li>
                    <li>Training Rooms</li>
                    <li>Roof Top Terrace</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picturelabs}`}
                >
                  &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan} ${standardStyles.card__headingSpan_mainColor}`}
                  >
                    Customized Training{" "}
                  </span>
                </h4>
                <div className={standardStyles.card__details}>
                  <ul>
                    <li>Skill Based Training</li>
                    <li>Life Long Learning</li>
                    <li>Practical Courses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={standardStyles.col1of3}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picturelabs}`}
                >
                  &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan} ${standardStyles.card__headingSpan_mainColor}`}
                  >
                    Customized Training{" "}
                  </span>
                </h4>
                <div className={standardStyles.card__details}>
                  <ul>
                    <li>Skill Based Training</li>
                    <li>Life Long Learning</li>
                    <li>Practical Courses</li>
                    <li>Real Life Experiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className={HomeStyles.sectionThree}>
        <h2 className={HomeStyles.eventHeading}>
          <span>Events </span> at COSTAATT
        </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}></div>
          <div className={standardStyles.col2of3}></div>
        </div>

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
      {/* </section> */}
    </>
  );
};

export default Home;
