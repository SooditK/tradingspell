import React from "react";
// import BeltBlue from "./BeltBlue";
// import img from "next/img";

const Testimonials = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font mt-32">
        <center>
          <section className="text-black body-font bg-yellow-400">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex items-center justify-center flex-wrap w-full">
                <h1 className="sm:text-6xl drop-shadow-xl text-2xl font-bold title-font mb-2 text-back">
                  TESTIMONIALS
                </h1>
              </div>
              <h4 className="flex text-lg justify-center items-center mt-4">
                Our Work Speaks for itself...There are numerous examples of how
                TradingSpell has changed lives
              </h4>
            </div>
          </section>
        </center>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 justify-center items-center">
            <div className="lg:w-1/3 sm:w-full p-4">
              <h1 className="title-font text-lg font-medium text-white ml-16">
                ADESH
              </h1>
              <div className="flex relative h-56 w-80 sm:w-96">
                <img
                  alt="adesh testimonial"
                  className="absolute inset-0 h-56 w-80 md:w-96 md:h-full object-contain object-center"
                  src="https://i.imgur.com/iT7UsKp.jpg"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 mt-4">
              <h1 className="title-font text-lg font-medium text-white -m-10 ml-16">
                SAI VIGNESH
              </h1>
              <div className="flex relative h-96 w-80 sm:w-96">
                <img
                  alt="sai vignesh testimonials"
                  className="absolute inset-0 w-96 h-full object-contain object-center"
                  src="https://i.imgur.com/09zQc0k.jpg"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <h1 className="title-font text-lg font-medium text-white  ml-16">
                NEHA
              </h1>
              <div className="flex relative h-80 w-80 sm:w-96">
                <img
                  alt="neha testimonial"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src="https://i.imgur.com/fZI7HxS.jpg"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <h1 className="title-font text-lg font-medium text-white -mb-3 ml-16">
                BHAUMIK
              </h1>
              <div className="flex relative h-96 w-80 sm:w-96">
                <img
                  alt="bhaumik testimonial"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src="https://i.imgur.com/KRzzqFr.jpg"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <h1 className="title-font text-lg font-medium text-white -mb-3 ml-16">
                SNEHALATHA
              </h1>
              <div className="flex relative h-96 w-80 sm:w-96">
                <img
                  alt="snehlata testimonial"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src="https://i.imgur.com/V04RDwO.jpg"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <h1 className="title-font text-lg font-medium text-white ml-16">
                ROHIT
              </h1>
              <div className="flex relative h-96 w-80">
                <img
                  alt="rohit testimonial"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src="https://i.imgur.com/IAuYiAo.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
