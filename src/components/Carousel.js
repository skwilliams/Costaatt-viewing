import Image from "next/image";
import CarouselStyles from "../styles/Carousel.module.scss";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSlider = ({ story }) => {
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
      <Carousel responsive={responsive} autoPlay>
        {story.map((slide, index) => (
          <>
            <div key={index}>
              <img src={slide.image} className={CarouselStyles.sliderImage} />
            </div>{" "}
            <Link href={`${slide.url}`}>
              <div className={CarouselStyles.sliderText}>
                <h3> MEET </h3>
                <h3> {slide.title} </h3>
              </div>{" "}
            </Link>
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
