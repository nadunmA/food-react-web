import React from "react";
import Slider from "react-slick";
import Kottu from "../../assets/kottu.png";
import Naci from "../../assets/see.png";
import Biriyani from "../../assets/birab.png";
import see from "../../assets/hFood.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenuData = [
  {
    id: 1,
    name: "Kottu",
    price: "Rs.800",
    img: Kottu,
  },
  {
    id: 2,
    name: "Naci Goreng",
    price: "Rs.1200",
    img: Naci,
  },
  {
    id: 3,
    name: "Biriyani",
    price: "Rs.800",
    img: Biriyani,
  },
  {
    id: 4,
    name: "See Food",
    price: "Rs.1800",
    img: see,
  },
];

const OurMenu = () => {
  const settings = {
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

  return (
    <div className="py-16 bg-green-600 text-black shadow-1">
      <div className="container mx-auto px-4">
        {/*Header section*/}
        <div className="mb-10 space-y-5">
          <h1 className="text-center text-4xl font-bold text-black">
            Our Menu
          </h1>
          <div className="text-center sm:max-w-sm mx-auto text-xs opacity-75 text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            <br />
            quaerat tempore unde. Saepe, et ad velit sed veniam, at error
          </div>
        </div>

        {/*Slider section*/}
        <Slider {...settings}>
          {MenuData.map((menu) => (
            <div key={menu.id} className="my-16">
              <div className="flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl bg-black shadow-xl">
                {/*image section */}
                <div className="mb-3 flex justify-center">
                  <img
                    src={menu.img}
                    alt={menu.id}
                    className="rounded-full w-48 h-48 object-cover shadow-lg"
                  />
                </div>
                {/*text content section */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {menu.name}
                  </h3>
                  <p className="text-lg font-bold text-green-600">
                    {menu.price}
                    {/*Button part*/}

                    <div>
                      <button class="btnn">
                        <i class="animation"></i>Buy Now
                        <i class="animation"></i>
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurMenu;
