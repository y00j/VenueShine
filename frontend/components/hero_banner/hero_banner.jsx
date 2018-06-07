import React from "react";
import Slider from "react-slick";

class HeroSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return <div className="slider-container">
        <Slider {...settings}>
          <div className="slide one">
            <img src="https://s3-us-west-1.amazonaws.com/venueshine-dev/events/cheerful-club-concert.jpg" alt="slide-img-1" />
          </div>
          <div className="slide two">
            <img src="https://s3-us-west-1.amazonaws.com/venueshine-dev/events/blur-bokeh-electronics-919734.jpg" alt="slide-img-2" />
          </div>
          <div className="slide three">
            <img src="https://s3-us-west-1.amazonaws.com/venueshine-pro/events/images/000/000/119/original/pexels_photo_929831.jpg" alt="slide-img-3" />
          </div>
          <div className="slide four">
            <img src="https://s3-us-west-1.amazonaws.com/venueshine-pro/events/images/000/000/099/original/pexels_photo_929824.jpg" alt="slide-img-4" />
          </div>
        </Slider>
      </div>;
  }
}

export default HeroSlider;