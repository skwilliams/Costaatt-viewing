import Image from "next/image";
import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import HomeStyles from "../styles/Home.module.scss";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  function time() {
    setTimeout(nextSlide, 15000);
  }
  // time();

  return (
    <div className={HomeStyles.slider}>
      <div className={HomeStyles.sliderArrows}>
        <FaAngleLeft
          className={HomeStyles.leftSliderArrow}
          onClick={prevSlide}
        />
        <FaAngleRight
          className={HomeStyles.rightSliderArrow}
          onClick={nextSlide}
        />
      </div>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <Image
                src={slide.image}
                alt="image"
                className={HomeStyles.sliderImage}
              />
            )}
            <div>
              {/* {index === current && (
                <Link href={`${slide.url}`}>
                  <h1 className={HomeStyles.sliderText}> {slide.title} </h1>
                </Link>
              )} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
