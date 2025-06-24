import React, { useState, useEffect } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev >= FeedBackData.length - slidesToShow ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesToShow]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= FeedBackData.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? FeedBackData.length - slidesToShow : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-35 mb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold text-green-600"
          >
            Feedbacks
          </h1>
        </div>

        {/* Slider section */}
        <div data-aos="zoom-in" className="relative overflow-hidden shadow-1">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
              width: `${(FeedBackData.length * 100) / slidesToShow}%`,
            }}
          >
            {FeedBackData.map((item) => (
              <div
                key={item.id}
                className="px-2"
                style={{ width: `${100 / FeedBackData.length}%` }}
              >
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-white relative min-h-64 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded-full w-16 h-16 object-cover border-2 border-gray-200"
                    />
                  </div>
                  {/* Content section */}
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                      <h2 className="text-xl font-bold text-green-600">
                        {item.name}
                      </h2>
                    </div>
                  </div>
                  {/* Quote mark */}
                  <div className="absolute top-4 right-6 text-6xl text-green-600 font-serif">
                    "
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          >
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.max(1, FeedBackData.length - slidesToShow + 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
