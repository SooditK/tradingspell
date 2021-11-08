import React from "react";
import BeltGreen from "./BeltGreen";
import BasicTable from "./Table";
import styles from "../styles/Feature.module.css";
import Countdown from "./countdown/Countdown";
import Link from "next/link";

const Feature = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <center>
          <BeltGreen text="Deliverables in Master Technical Analysis Program" />
        </center>
        <div className="container justify-center items-center px-5 pt-24 pb-28 mx-auto flex flex-wrap">
          <div className="flex justify-center items-center flex-wrap w-5/6 sm:w-4/6">
            <BasicTable className="text-xl" />
          </div>
          <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="w-full sm:p-4 px-4 mb-6">
                <div className="flex flex-col text-center w-full mt-20">
                  <div className="flex flex-col text-center w-full mb-16">
                    {/* <strike className="text-3xl sm:text-5xl text-white font-black mb-5 title-font">
                {" "}
                (₹68485/-){" "}
              </strike> */}
                    <span className="text-3xl mb-3 text-gray-300">
                      Program will start from 14th November
                    </span>
                    <h1 className="text-2xl sm:text-5xl text-white font-medium title-font">
                      ALL THIS IN JUST{" "}
                      <span className="my-4 font-bold text-yellow-400 text-6xl flex items-center justify-center ">
                        ₹10999/-
                        <p className="mt-8 text-base">Including GST</p>
                      </span>
                      <strike className="font-light"> (₹19999/-) </strike>
                      <span className="font-black">45% OFF</span>
                    </h1>
                  </div>
                  <h1 className=" sm:text-3xl text-white text-xl font-medium title-font">
                    So What are You Waiting for..!! Hop on to the journey to
                    become financially Free
                  </h1>
                  <div className="flex-row sm:flex items-center justify-center mt-10">
                    <a
                      href="https://rzp.io/l/MTAP"
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
                  {/* <p
                      className={`flex text-lg sm:text-5xl items-center justify-center mt-8 neonText ${styles.neonText}`}
                    >
                      Special Diwali Offer Extra ₹1000 OFF till 7th November
                    </p> */}
                </div>
              </div>
            </div>
          </section>
          <Countdown />
        </div>
      </section>
    </div>
  );
};

export default Feature;
