import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/styles.css";

// Import images properly
import Image1 from "../assets/hero1.jpg";
import Image2 from "../assets/hero2.jpg";
import Image3 from "../assets/hero3.jpg";
import Image4 from "../assets/hero4.jpg";

const HeroCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        <div>
          <img src={Image1} alt="Construction Engineering" className="carousel-image" />
        </div>
        <div>
          <img src={Image2} alt="Accurate Calculations" className="carousel-image" />
        </div>
        <div>
          <img src={Image3} alt="Project Estimation" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
