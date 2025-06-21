import React from "react";
import HeroJpeg from "./../../assets/hFood.png";

const Hero = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-green-600 flex justify-center items-center">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/*text content section*/}

          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
            <h1 className="text-8xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-900">
              Try <br />
              Now
            </h1>
            <p className="text-sm text-black font-sans ml-2.5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              <br />
              odio nemo veritatis eveniet quas ut dolorum provident
              <br />
              dignissimos saepe molestias.
            </p>
            <div>
              <a class="fancy" href="#">
                <span class="top-key"></span>
                <span class="text">View Menu</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </a>
            </div>
          </div>

          {/*image section*/}
          <div className="min-h[450px] flex justify-center items-center relative order-1 sm:order-2">
            <img src={HeroJpeg} alt="Hero img" className="max-w-[450px] w-full mx-auto sm:scale-125 shadow-1"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
