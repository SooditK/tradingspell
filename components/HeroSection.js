/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Typical from "react-typical";
// import img from "next/img";

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-300 bg-gray-900 body-font">
        <section className=" text-white">
          <div className="flex items-center justify-center px-5 pt-10 -mb-14 mx-auto">
            <div className="w-full">
              <center>
                <h1 className="flex items-center justify-center sm:text-6xl drop-shadow-xl text-2xl font-bold title-font mb-2 text-back">
                  Master Technical Analysis Program(2.0)
                </h1>
              </center>
            </div>
          </div>
        </section>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="w-full sm:w-4/6 mb-10 object-cover object-center rounded"
            alt="Trading Spell"
            src="https://i.imgur.com/x4oBqfW.png"
          />
          <div className="text-center lg:w-5/6 w-full">
            <h1 className="title-font sm:text-6xl text-xl mb-4 font-bold text-white">
              <Typical
                loop={Infinity}
                steps={[
                  " ",
                  300,
                  "Your",
                  300,
                  "Your Trading",
                  300,
                  "Your Trading Success",
                  300,
                  "Your Trading Success Starts",
                  300,
                  "Your Trading Success Starts Here",
                  300,
                  " ",
                  300,
                  "You'll",
                  300,
                  "You'll Be",
                  300,
                  "You'll Be Financially",
                  300,
                  "You'll Be Financially Independent",
                  300,
                ]}
              />
            </h1>
            <p className="sm:text-2xl text-white font-normal text-md leading-relaxed mb-8">
              "Trading is not about being right, It is about finding steps that
              offer you a good risk/reward and pulling the trigger."
              <br />
              <br />
              Join one of the fastest growing Trading Community and start your
              <br />
              journey to become financially independent with us.
            </p>
            <div className="flex-row sm:flex items-center justify-center mt-10">
              <a
                href="https://rzp.io/l/ZRaXZNJ4L"
                className="flex items-center justify-center"
              >
                <button className="flex rounded-full text-md sm:text-2xl text-black bg-green-300 border-2 py-2 px-4 sm:py-2 sm:px-8 focus:outline-none border-green-300 shadow-2xl hover:border-green-700 hover:bg-green-700 hover:text-white">
                  Enroll for Master Technical Analysis Program
                </button>
              </a>
              {/* <a
                href="https://rzp.io/l/ZRaXZNJ4L"
                className="flex items-center justify-center"
              >
                <button className="sm:ml-6 rounded-full flex mt-4 sm:mt-0 text-black bg-yellow-400 border-2 py-2 px-4 sm:py-2 sm:px-8 border-yellow-400 hover:bg-yellow-700 hover:text-white hover:border-yellow-700 text-md sm:text-2xl">
                  Reserve Your Spot for MTAP (2.0)
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
