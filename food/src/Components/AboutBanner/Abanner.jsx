import React from "react";
import Banner from "../../assets/birab.png";

const Abanner = () => {
  return (
    <div className="min-h-[620px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/*Image section*/}
          <div className="flex justify-center items-center">
            <img
              src={Banner}
              alt="About logo"
              className="max-w-[450px] w-full mx-auto shadow-1 mt-9 "
            />
          </div>

          {/*Text section*/}

          <div className="flex flex-col justify-center gap-3 sm:pt-0">
            <p className="text-4xl font-bold text-dark">About</p>
            <h1 className="text-3xl text-grren-600 font-semibold font-cursive text-green-600">
              Fresh Food
            </h1>
            <p className="font-sans leading-6 text-gray-700 text-[15px] md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. nulla eos
              dignissimos
              <br />
              vitae aliquid minima quo distinctio, iste culpa doloribus,
              laboriosam nulla eos
              <br />
              atque quisquam? Nesciunt quae modi perspiciatis quo! dignissimos
              quae ascd
              <br />
              vitae aliquid minima quo distinctio, iste culpa doloribus,
              laboriosam nulla eos
              <br />
              vitae aliquid minima quo distinctio, iste culpa doloribus,
              laboriosam nulla eos
              <br />
              vitae aliquid minima quo distinctio, iste culpa doloribus
              distinctio fsa ascd
              <br />
              vitae aliquid minima quo distinctio, iste culpa iste culpa iste
              culpa
            </p>

            {/* Button part now inside text section */}
            <div>
              <a className="btn" href="#">
                <span className="top-key"></span>
                <span className="text">View Menu</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abanner;
