import logo from "../../../public/images/logos/costaattlogographic.png";
import HomeStyles from "../../styles/Home.module.scss";

import CarouselSlider from "../Carousel";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import EventsCalendar from "../PageComponents/EventsCalendar";
import Testimonial from '../PageComponents/Testimonial'; // Adjust the import path as necessary
import circularimage from"../../../public/images/homepage/pitch2.jpg";
import costaattimage from "../../../public/images/servicesPhoto/ChaguanasOutside.jpeg";
import person1 from "../../../public/images/successStories/person1.jpg";
import person2 from "../../../public/images/successStories/person2.jpg";
import person3 from "../../../public/images/successStories/person3.jpg";
import professional from "../../../public/images/homepage/professional.jpg";
import EducationSection from "./EducationSection";



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


import videoFeature from    "../../../public/videos/students.mp4";

import { Carousel } from "react-responsive-carousel";

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
      <section id="video">
        <div className={HomeStyles.sectionLeftBottom}>
          <div className={HomeStyles.selectContainer}>
            <h2 className={HomeStyles.heading}>
              The Premier Undergraduate College
            </h2>
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
              className={HomeStyles.selecthome}
              onClick={handleButtonClick}
            >
              {" "}
              Submit
            </button>
          </div>
        </div>{" "}
        {/* </div> */}
        <div className={HomeStyles.bg_video}>
          <video
            src={videoFeature}
            autoPlay
            loop
            muted
            className={HomeStyles.bg_video__content}
          />
        </div>
        {/* </section>

      <section> */}
        <div id="unique" className={HomeStyles.containerunique}>
          {/* <div className={HomeStyles.row}> */}
          <div className={HomeStyles.threeholder}>
            <div className={HomeStyles.threeone}>
              <div className={HomeStyles.circlepic}></div>
              <div className={HomeStyles.circleborder}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="-9 -10 80 63"
                  enableBackground="new 0 0 40 60"
                  space="preserve"
                >
                  <g>
                    <path d="M26.53,10.843c-0.014,0.148-0.033,0.294-0.033,0.444c0,3.495,2.713,6.326,6.058,6.326c3.344,0,6.055-2.832,6.055-6.326   c0-0.151-0.021-0.297-0.031-0.444H26.53z" />
                    <path d="M40.253,8.155c-0.396-3.512-2.425-6.392-5.141-7.519v5.403c0,0.32-0.26,0.579-0.579,0.579c-0.32,0-0.579-0.259-0.579-0.579   V0.272c-0.448-0.097-0.908-0.155-1.38-0.155c-0.468,0-0.924,0.059-1.369,0.156v5.766c0,0.32-0.259,0.579-0.578,0.579   c-0.32,0-0.579-0.259-0.579-0.579V0.638c-2.711,1.133-4.753,4.024-5.175,7.517h-2.001V9.66H42.26V8.155H40.253z" />
                  </g>
                  <g>
                    <path d="M40.712,19.183l-2.604-0.001l-4.02,8.935v-9.111H31.31v9.02l-3.981-8.849l-2.601-0.001c-4.237,0-7.49,3.061-8.182,7.142   L13.21,14.731c-0.081-0.28-0.305-0.495-0.588-0.563l-5.501-1.325c-1.734-0.197-3.134,0.067-4.275,0.81   c-1.344,0.874-2.293,2.117-2.672,3.503c-0.354,1.295-0.161,2.644,0.488,3.865c0.008,0.021,0.005,0.042,0.015,0.063l7.487,16.011   L7.646,37.35c-3.762,1.849-1.076,7.31,2.687,5.459l0.41-0.201l2.608,5.576c0.421,0.902,1.23,1.62,2.219,1.971   c0.465,0.165,0.958,0.246,1.464,0.246c0.776,0,1.583-0.192,2.363-0.573c2.239-1.093,3.236-3.398,2.319-5.363l-0.038-0.08   c0.013-0.106,0.006-0.216-0.025-0.324l-0.547-1.901c0.375-0.492,0.628-1.142,0.628-1.992V28.501h1.697l-0.003,20.775h18.907   l0.007-20.775h1.661v17.825c0,4.065,5.299,4.065,5.288,0V28.07C49.291,23.582,45.966,19.183,40.712,19.183z M2.257,20.593   c-0.618-0.951-0.797-1.992-0.52-3.01c0.273-1.001,0.981-1.914,1.992-2.571c0.825-0.537,1.841-0.714,3.11-0.577l4.944,1.197   l5.686,19.75L9.367,18.054c-0.014-0.03-0.039-0.049-0.056-0.076c-0.1-0.255-0.227-0.504-0.382-0.743   c-1.036-1.593-3.177-2.046-4.772-1.009c-1.349,0.878-1.733,2.69-0.856,4.041C4.055,21.421,5.604,21.749,6.757,21   c0.997-0.65,1.281-1.991,0.634-2.988c-0.122-0.188-0.272-0.35-0.446-0.482c0.245,0.14,0.46,0.337,0.624,0.589   c0.749,1.151,0.422,2.696-0.727,3.443C5.308,22.558,3.252,22.122,2.257,20.593z M18.687,48.371   c-0.895,0.437-1.811,0.524-2.576,0.256c-0.582-0.207-1.053-0.617-1.292-1.129l-2.621-5.605l0.136-0.067   c3.763-1.847,1.077-7.311-2.686-5.458l-0.027,0.014L3.585,23.475c1.352,0.415,2.865,0.273,4.141-0.554   c0.619-0.404,1.078-0.954,1.394-1.57L20.247,45.15C20.78,46.292,20.109,47.677,18.687,48.371z" />
                  </g>
                </svg>
                <h4>UpSkilling</h4>
                <div>
                  <ul>
                    <li>Vocational Training</li>
                    <li>Incubation</li>
                    <li>Acceleration</li>
                    <li>Business Coaching</li>
                    <li>Mentorship</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={HomeStyles.threetwo}>
              <div className={HomeStyles.circlepic}></div>
              <div className={HomeStyles.circleborder}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="-9 -10 80 63"
                  enableBackground="new 0 0 40 60"
                  space="preserve"
                >
                  <g>
                    <path d="M26.53,10.843c-0.014,0.148-0.033,0.294-0.033,0.444c0,3.495,2.713,6.326,6.058,6.326c3.344,0,6.055-2.832,6.055-6.326   c0-0.151-0.021-0.297-0.031-0.444H26.53z" />
                    <path d="M40.253,8.155c-0.396-3.512-2.425-6.392-5.141-7.519v5.403c0,0.32-0.26,0.579-0.579,0.579c-0.32,0-0.579-0.259-0.579-0.579   V0.272c-0.448-0.097-0.908-0.155-1.38-0.155c-0.468,0-0.924,0.059-1.369,0.156v5.766c0,0.32-0.259,0.579-0.578,0.579   c-0.32,0-0.579-0.259-0.579-0.579V0.638c-2.711,1.133-4.753,4.024-5.175,7.517h-2.001V9.66H42.26V8.155H40.253z" />
                  </g>
                  <g>
                    <path d="M40.712,19.183l-2.604-0.001l-4.02,8.935v-9.111H31.31v9.02l-3.981-8.849l-2.601-0.001c-4.237,0-7.49,3.061-8.182,7.142   L13.21,14.731c-0.081-0.28-0.305-0.495-0.588-0.563l-5.501-1.325c-1.734-0.197-3.134,0.067-4.275,0.81   c-1.344,0.874-2.293,2.117-2.672,3.503c-0.354,1.295-0.161,2.644,0.488,3.865c0.008,0.021,0.005,0.042,0.015,0.063l7.487,16.011   L7.646,37.35c-3.762,1.849-1.076,7.31,2.687,5.459l0.41-0.201l2.608,5.576c0.421,0.902,1.23,1.62,2.219,1.971   c0.465,0.165,0.958,0.246,1.464,0.246c0.776,0,1.583-0.192,2.363-0.573c2.239-1.093,3.236-3.398,2.319-5.363l-0.038-0.08   c0.013-0.106,0.006-0.216-0.025-0.324l-0.547-1.901c0.375-0.492,0.628-1.142,0.628-1.992V28.501h1.697l-0.003,20.775h18.907   l0.007-20.775h1.661v17.825c0,4.065,5.299,4.065,5.288,0V28.07C49.291,23.582,45.966,19.183,40.712,19.183z M2.257,20.593   c-0.618-0.951-0.797-1.992-0.52-3.01c0.273-1.001,0.981-1.914,1.992-2.571c0.825-0.537,1.841-0.714,3.11-0.577l4.944,1.197   l5.686,19.75L9.367,18.054c-0.014-0.03-0.039-0.049-0.056-0.076c-0.1-0.255-0.227-0.504-0.382-0.743   c-1.036-1.593-3.177-2.046-4.772-1.009c-1.349,0.878-1.733,2.69-0.856,4.041C4.055,21.421,5.604,21.749,6.757,21   c0.997-0.65,1.281-1.991,0.634-2.988c-0.122-0.188-0.272-0.35-0.446-0.482c0.245,0.14,0.46,0.337,0.624,0.589   c0.749,1.151,0.422,2.696-0.727,3.443C5.308,22.558,3.252,22.122,2.257,20.593z M18.687,48.371   c-0.895,0.437-1.811,0.524-2.576,0.256c-0.582-0.207-1.053-0.617-1.292-1.129l-2.621-5.605l0.136-0.067   c3.763-1.847,1.077-7.311-2.686-5.458l-0.027,0.014L3.585,23.475c1.352,0.415,2.865,0.273,4.141-0.554   c0.619-0.404,1.078-0.954,1.394-1.57L20.247,45.15C20.78,46.292,20.109,47.677,18.687,48.371z" />
                  </g>
                </svg>

                <h4>Programmes</h4>
                <div>
                  {" "}
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
            <div className={HomeStyles.threethree}>
              <div className={HomeStyles.circlepic}></div>

              <div className={HomeStyles.circleborder}>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="-100 -50 800 600"
                  style={{ enableBackground: "new 0 0 592.875 592.875" }}
                  space="preserve"
                >
                  <g>
                    <polygon points="66.938,106.688 0,195.936 0,330.604 66.938,297.938 \t" />
                    <path d="M512.388,238.173L76.5,106.688v188.859l177.461,20.464L424.575,281.3c0.296-0.066,0.593,0.02,0.898,0.02\n\t\t\t\t\t\t\tc0.307,0,0.612-0.096,0.928-0.038l89.505,16.571L512.388,238.173z M162.562,164.857l86.062,23.906v10.547l-86.062-21.841V164.857z\n\t\t\t\t\t\t\t M248.625,241.357l-86.062-14.745v-39.273l86.062,21.841V241.357z" />
                    <polygon points="233.086,319.053 72.914,302.318 7.172,332.201 128.692,340.568 \t" />
                    <path d="M430.312,291.732v44.619v149.835l127.334-15.329h6.541v-0.784l28.688-3.452V321.835l-76.395-14.152L430.312,291.732z\n\t\t\t\t\t\t\t M449.438,338.551v-1.167l54.182,7.421l3.193,0.43v123.003l-57.375,7V338.551z M583.312,458.904l-19.125,2.333V353.086l19.125,2.62\n\t\t\t\t\t\t\tV458.904z M554.625,462.404l-38.25,4.666V346.545l38.25,5.24V462.404z" />
                    <polygon points="105.188,356.031 105.188,447.506 200.812,459.22 200.812,380.808 248.625,375.232 248.625,465.082 420.75,486.177 \n\t\t\t\t\t\t\t420.75,335.242 420.75,291.828 284.57,319.54 \t" />
                    <path d="M95.625,352.12L95.625,352.12L95.625,352.12z" />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>

                <h4>TECH HUB</h4>
                <div>
                  <ul>
                    <li>Digital Training</li>
                    <li>Digital Content</li>
                    <li>Prototyping</li>
                    {/* <li>Product Commercialisation</li> */}
                    <li>Business Coaching </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={HomeStyles.threefour}>
              <div className={HomeStyles.circlepic}></div>

              <div className={HomeStyles.circleborder}>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="-100 -50 800 600"
                  style={{ enableBackground: "new 0 0 592.875 592.875" }}
                  space="preserve"
                >
                  <g>
                    <polygon points="66.938,106.688 0,195.936 0,330.604 66.938,297.938 \t" />
                    <path d="M512.388,238.173L76.5,106.688v188.859l177.461,20.464L424.575,281.3c0.296-0.066,0.593,0.02,0.898,0.02\n\t\t\t\t\t\t\tc0.307,0,0.612-0.096,0.928-0.038l89.505,16.571L512.388,238.173z M162.562,164.857l86.062,23.906v10.547l-86.062-21.841V164.857z\n\t\t\t\t\t\t\t M248.625,241.357l-86.062-14.745v-39.273l86.062,21.841V241.357z" />
                    <polygon points="233.086,319.053 72.914,302.318 7.172,332.201 128.692,340.568 \t" />
                    <path d="M430.312,291.732v44.619v149.835l127.334-15.329h6.541v-0.784l28.688-3.452V321.835l-76.395-14.152L430.312,291.732z\n\t\t\t\t\t\t\t M449.438,338.551v-1.167l54.182,7.421l3.193,0.43v123.003l-57.375,7V338.551z M583.312,458.904l-19.125,2.333V353.086l19.125,2.62\n\t\t\t\t\t\t\tV458.904z M554.625,462.404l-38.25,4.666V346.545l38.25,5.24V462.404z" />
                    <polygon points="105.188,356.031 105.188,447.506 200.812,459.22 200.812,380.808 248.625,375.232 248.625,465.082 420.75,486.177 \n\t\t\t\t\t\t\t420.75,335.242 420.75,291.828 284.57,319.54 \t" />
                    <path d="M95.625,352.12L95.625,352.12L95.625,352.12z" />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>

                <h4>SERVICES</h4>
                <div>
                  <ul>
                    <li> Lab Rentals</li>
                    <li>Translation and Interpretation</li>
                    <li>Training Spaces</li>
                    <li>Customized Training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="notices" className={HomeStyles.sectionNotices}>
        <div>
          <Image
            src={circularimage}
            width="500"
            height="300"
            alt="Circular image"
          />
        </div>{" "}
        <div>
          <h2>Full Circle Challenge </h2>
          <p> A Circular Economy Rich Pitch Competition </p>
          <button
            className={`${HomeStyles.btn} ${HomeStyles.btn__white} ${HomeStyles.btnText}`}
          >
            Register Now
          </button>
        </div>
      </section>
      <section id="education" className={HomeStyles.sectioneducation}>
        <EducationSection image={professional} />
      </section>
      <section id="success-stories" className={HomeStyles.successSection}>
        <div className={HomeStyles.successStories}>
          <Testimonial />
        </div>
      </section>
      <section id="events" className={HomeStyles.sectionEvents}>
        <EventsCalendar />
        {/* <buton
          className={`${HomeStyles.btn__selecthome} ${HomeStyles.rightalign} ${HomeStyles.btn__purple}`}
        >
          MORE EVENTS
        </buton> */}

        {/* <div className={HomeStyles.sectionThreeTiles}>
       
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
        </div> */}
      </section>
      <section id="news"></section>

      {/* <section id="news" className={HomeStyles.sectionFour}>
        // /
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
      </section> */}
    </>
  );
};




export default Home;
