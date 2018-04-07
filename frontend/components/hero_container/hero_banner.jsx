import React from "react";
import Slider from "react-slick";

class HeroSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-containers">
        <Slider {...settings}>
          <div className="slide one">
          </div>
        </Slider>
      </div>
    );
  }
}

export default HeroSlider;