import React from "react";
import Banner from "../../assets/birab.png";

const backgroundStyle = {
  backgroundImage: `url(${Banner})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center right",
  minHeight: "350px",
  width: "100%",
};

const NewsLetter = () => {
  return (
    <div
      className="bg-green-600 text-white relative overflow-hidden"
      style={backgroundStyle}
    >
      {/* Enhanced responsive overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent lg:from-green-600/90 lg:via-green-600/60 lg:to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative z-10 mt-18">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Text Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex-1 space-y-4 text-left animate-fade-in max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
              Ready to Get Started
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
          </div>

          {/* Input Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex-shrink-0 w-full max-w-md lg:max-w-lg"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none
                         text-gray-800 placeholder-gray-400 border-0 focus:outline-none
                         focus:ring-2 focus:ring-white/50 transition-all duration-300
                         font-medium text-sm"
              />
              <button
                className="bg-white hover:bg-gray-50 text-red-500 font-bold
                         px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md
                         transition-all duration-300 whitespace-nowrap shadow-lg
                         text-sm uppercase tracking-wide"
              >
                Get Started
              </button>
            </div>

            {/* Privacy text */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xs text-white/70 mt-3 text-center sm:text-left font-light"
            >
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Add some subtle animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NewsLetter;
