/**
   slick-carousel - v1.8.1 - https://github.com/akiran/react-slick
   Copyright (c) 2014 Kiran Abburi
   MIT License
*/

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * intefaces
 */

import { SliderProps } from "../../../interfaces/custom/slider-props-interface";

/**
 * carousel styles
 */

const arrowStyle = {
  width: "40px",
  height: "40px",
  cursor: "pointer",
};

const ArrowLeft: React.FC<any> = (props) => {
  return (
    <img
      {...props}
      style={{ ...arrowStyle }}
      className="text-3xl"
      src="/icons/arrow-left.svg"
      alt="icon"
    />
  );
};

const ArroRight: React.FC<any> = (props) => {
  return (
    <img
      {...props}
      style={{ ...arrowStyle }}
      src="/icons/arrow-right.svg"
      alt="icon"
    />
  );
};

const SliderComponent: React.FC<SliderProps> = ({ slides }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArroRight />,
  };
  return (
    <Slider className="mt-10 flex items-center" {...sliderSettings}>
      {slides.map((slide, __index__) => (
        <div key={__index__}>{slide}</div>
      ))}
    </Slider>
  );
};

export { SliderComponent };
