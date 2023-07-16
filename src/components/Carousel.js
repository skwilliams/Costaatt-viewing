import React, { useState } from "react";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import CarouselStyles from "../styles/Carousel.module.scss";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSlider = ({ story }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={CarouselStyles.carousel}>
      <Carousel responsive={responsive}>
        {story.map((slide, index) => (
          <div key={index}>
            <Image src={slide.image} className={CarouselStyles.sliderImage} />
          </div>
        ))}
      </Carousel>{" "}
    </div>
  );
};

export default CarouselSlider;

// <div className={CarouselStyles.slider}>
//   <div className={CarouselStyles.sliderArrows}>
//     <FaAngleLeft
//       className={CarouselStyles.leftSliderArrow}
//       onClick={prevSlide}
//     />
//     <FaAngleRight
//       className={CarouselStyles.rightSliderArrow}
//       onClick={nextSlide}
//     />
//   </div>
//   <div className={CarouselStyles.carousel}>
//     {story.map((slide, index) => (
//       <div
//         key={index}
//         className={`${CarouselStyles.slide} ${
//           index === current ? CarouselStyles.active : ""
//         }`}
//       >
//         <Image
//           src={slide.image}
//           alt="image"
//           className={CarouselStyles.sliderImage}
//         />
//       </div>
//     ))}
//   </div>
// </div>
// const [current, setCurrent] = useState(0);
// const length = story.length;

// if (!Array.isArray(story) || story.length <= 0) {
//   return null;
// }

// const nextSlide = () => {
//   setCurrent((current + 1) % length);
// };

// const prevSlide = () => {
//   setCurrent((current - 1 + length) % length);
// };
