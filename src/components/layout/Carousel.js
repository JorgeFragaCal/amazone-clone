import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Carousel.css";

const Carousel = ({ carouselItems, title }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel__container">
      <h2 className="carousel__title">{title}</h2>
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <a href={item.link}>
            <img key={item.id} src={item.image} alt="" />
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
