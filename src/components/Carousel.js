import Image from "next/image";
import CarouselStyles from "../styles/Carousel.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSlider = ({ story, onSelect }) => {
  const handleSelect = (selectedItem, e) => {
    e.stopPropagation(); // Prevent event from propagating
    onSelect(selectedItem);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
            <Image
              src={slide.image}
              alt="carousel for images"
              className={CarouselStyles.sliderImage}
              onClick={(e) => handleSelect(slide, e)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
