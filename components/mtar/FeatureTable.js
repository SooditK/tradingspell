import React from "react";
// import BeltGreen from "./BeltGreen";
import BasicTable from "./Table";

const FeatureTable = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <center>
          {/* <BeltGreen text="Deliverables in Master Technical Analysis Program" /> */}
          <section class="text-black body-font bg-green-300">
            <div class="container px-5 py-10 mx-auto">
              <div class="flex items-center justify-center flex-wrap w-full">
                <h1 class="sm:text-6xl drop-shadow-xl text-2xl font-bold title-font mb-2 text-back">
                  Deliverables in Master Technical Analysis Revision
                </h1>
              </div>
              {/* <h4 class="flex text-lg justify-center items-center mt-4"></h4> */}
            </div>
          </section>
        </center>
        <div className="container justify-center items-center px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex justify-center items-center flex-wrap w-5/6 sm:w-4/6">
            <BasicTable className="text-xl" />
          </div>
          <div className="flex flex-col text-center w-full mt-20">
            <div className="flex flex-col text-center w-full mb-16">
              {/* <strike className="text-3xl sm:text-5xl text-white font-black mb-5 title-font">
                {" "}
                (₹68485/-){" "}
              </strike> */}
              <h1 className="text-2xl sm:text-5xl text-white font-medium title-font">
                <span>STARTING FROM 7th OCTOBER</span>
                <br />
                ALL THIS IN JUST{" "}
                <span className="my-4 font-bold text-yellow-400 text-6xl flex items-center justify-center ">
                  ₹4999/-
                  <p className="mt-8 text-base">Including GST</p>
                </span>
                <strike className="font-light"> (₹14999/-) </strike>
                <span className="font-black">66.67% OFF</span>
              </h1>
            </div>
            <h1 className=" sm:text-3xl text-yellow-400 text-xl font-medium title-font">
              NOTE: THIS TRAINING IS ONLY FOR THOSE WHO HAVE PREVIOUSLY ATTENDED
              MTAP
            </h1>
            <div className="flex-row sm:flex items-center justify-center mt-10">
              <a
                href="https://rzp.io/l/MTARtradingspell"
                className="flex items-center justify-center"
              >
                <button className="flex rounded-full text-md sm:text-2xl text-black bg-green-300 border-2 py-2 px-4 sm:py-2 sm:px-8 focus:outline-none border-green-300 shadow-2xl hover:border-green-700 hover:bg-green-700 hover:text-white">
                  Enroll for Master Technical Analysis Revision
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

export default FeatureTable;
