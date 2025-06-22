import React from "react";
import Slider from "react-slick";

const FeedBackData = [
  {
    id: 1,
    name: "Nadun Algoda",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam asperiores dolv",
    img: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  },
  {
    id: 2,
    name: "Jhon Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam asperiores dolv",
    img: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  },
  {
    id: 3,
    name: "Sahan Perera",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam asperiores dolv",
    img: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  },
  {
    id: 4,
    name: "Wenura Denuwan",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam asperiores dolv",
    img: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  },
];

const FeedBack = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <div>FeedBack</div>;
};

export default FeedBack;
