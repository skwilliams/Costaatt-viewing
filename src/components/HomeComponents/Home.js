import logo from "../../../public/images/logos/costaattlogographic.png";
import HomeStyles from "../../styles/Home.module.scss";
import AdminStyles from "../../styles/Admissions.module.scss";
import standardStyles from "../..//styles/main.module.scss";
import HomeSlider from "../Slider";
import EventTile from "./EventTile";
import SchoolTile from "./SchoolTile";
import { FiBookOpen } from "react-icons/fi";
import { IconContext } from "react-icons";
import NewsTile from "./NewsTile";
import Image from "next/image";
import Link from "next/link";
import senior from "../../../public/images/senior_lec.jpg";
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
      <section id="search" className={HomeStyles.sectionOne}>
        <div className={HomeStyles.sectionOneLeft}>
          <div className={HomeStyles.sectionLeftTop}>
            <h2>The Premier Undergraduate College</h2>
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
                className={`${standardStyles.btn} ${standardStyles.btn__selecthome}`}
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

      <section id="unique" className={HomeStyles.sectionUniquelyUs}>
        <h1 className={HomeStyles.newsHeading}>
          <span>Uniquely</span> COSTAATT
        </h1>

        <div className={AdminStyles.fourColGridCon}>
          <div className={AdminStyles.fourColGrid}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>UpSkilling</h3>
              <div className={standardStyles.featurebox__text}>
                {/* <div className={standardStyles.card__details}> */}
                <ul>
                  <li>Vocational Training</li>
                  <li>Incubation</li>
                  <li>Acceleration</li>
                  <li>Business Coaching</li>
                  <li>Mentorship</li>
                  <li>Startup Finance</li>
                </ul>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className={AdminStyles.fourColGrid}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Programmes</h3>
              <div className={standardStyles.featurebox__text}>
                <ul>
                  <li>Top Class Lecturers</li>
                  <li>Work Ready Graduates</li>
                  <li>Accredited </li>
                  <li>Skill Based Learning</li>
                  <li>Small Class Sizes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={AdminStyles.fourColGrid}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Tech Hub</h3>
              <div className={standardStyles.featurebox__text}>
                <ul>
                  <li>Digital Training</li>
                  <li>Digital Content</li>
                  <li>Prototyping</li>
                  <li>Product Commercialisation</li>
                  <li>Business Coaching </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={AdminStyles.fourColGrid}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Unique Services</h3>
              <div className={standardStyles.featurebox__text}>
                {/* <ul>
                  <li>Computer Lab Rentals</li>
                  <li>Science Lab Rentals</li>
                  <li>Translation and Interpretation</li>
                  <li>Training Spaces</li>
                  <li>Customized Training</li>
                </ul> */}
                <ul>
                  <li>Computer Lab Rentals</li>
                  <li>Science Lab Rentals</li>
                  <li>Translation and Interpretation</li>
                  <li>Training Spaces</li>
                  <li>Customized Training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="news" className={HomeStyles.sectionFour}>
        {/* <h1 className={HomeStyles.newsHeading}>
          The amazing things We Do <span>NEWS</span>
        </h1> */}
        <div className={HomeStyles.sectionFourTiles}>
          <div className={HomeStyles.sectionNewsTitle}>
            <h1 className={HomeStyles.newsHeading}>
              The <span>Amazing </span> Things We Do <span>NEWS</span>
            </h1>
          </div>

          <div
            className={`${HomeStyles.newsFeatureImage} ${HomeStyles.newsTileHomepage}`}
          >
            <Link href="news">
              <NewsTile
                title="COSTAATT Lecturer Wins Film Awards"
                img={senior}
                date="24th April 2023"
              />
            </Link>
          </div>
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
        <div className={HomeStyles.sectionFourTiles}>
          <div> </div> <div> </div>
          <div>
            {" "}
            <button
              className={`${standardStyles.btn} ${standardStyles.btn__selecthome} ${standardStyles.btn__selecthome__center}`}
              onClick={handleButtonClick}
            >
              {" "}
              More News
            </button>{" "}
          </div>{" "}
        </div>
      </section>

      <section id="events" className={HomeStyles.sectionEvents}>
        <h1 className={HomeStyles.newsHeading}>
          <span>Events </span> at COSTAATT
        </h1>

        <div className={HomeStyles.sectionThreeTiles}>
          {/* <div className={standardStyles.row}> */}
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
        {/* </div> */}
      </section>

      <section id="success-stories" className={HomeStyles.successSection}>
        <div className={HomeStyles.successStories}>
          <h2 className={HomeStyles.newsHeading}>
            We <span> Tranform </span>LIVES
          </h2>
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
