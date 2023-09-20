import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";

const MyCarousel = () => {
  const carouselItems = [
    {
      image: "https://i.imgur.com/BtPs0yq.jpg",
      text: "ZIDAR",
    },
    {
      image: "https://i.imgur.com/b3mlYgi.png",
      text: "ZAVARIVAČ",
    },
    {
      image: "https://i.imgur.com/4KLNN1y.png",
      text: "ELEKTRIČAR",
    },
    {
      image: "https://i.imgur.com/hHhYcpB.png",
      text: "BRAVAR",
    },
    {
      image: "https://i.imgur.com/BB2xfke.png",
      text: "KERAMIČAR",
    },
  ];

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: "-80px",
          zIndex: 1,
          color: "606060",
          size: "30px",
        }}
        onClick={onClick}
      ></div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "0px", zIndex: 1 }}
        onClick={onClick}
      >
      </div>
    );
  };

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2, 
    infinite: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="image-wrapper">
              <img src={item.image} alt={item.text} />
            </div>
            <p className="text-overlay">{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
