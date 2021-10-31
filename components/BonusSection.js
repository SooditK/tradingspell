import React from "react";
import SimpleAccordion from "./Accordion";
import BeltGreen from "./BeltGreen";
import styles from "../styles/Feature.module.css";

const BonusSection = () => {
  return (
    <div>
      <section className="text-gray-200 bg-gray-900 body-font">
        <BeltGreen text="BONUSES" />
        <div className="container px-5 pb-24 mx-auto -mb-40">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 className="text-black text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 1: Access to Trading Spell Discord Community
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-lg text-black">
                        Access to Fastest Growing Trading Community. Get in the
                        Company of people who think like you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 className="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 2: Lifetime Support
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-lg text-black">
                        Get Lifetime Support directly from Nitin.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 className="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 3: Trading Screeners
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-lg text-black">
                        No Need to Analyze every chart. Scan Stocks by Technical
                        Screeners for Intraday, Swing & Long Term Trading.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 className="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 4: Earning Analysis
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-lg text-black">
                        You will also get to learn about the Fundamental side of
                        the Market.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 className="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 5: E-Book
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-lg text-black">
                        You will get the Trading Strategies E-Book with
                        Psychology and Extra Comments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 className="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 6: Access to Lecture Notes & PDFs
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-lg text-black">
                        Along with recordings access you will also get the
                        access to Lecture Notes & Slides.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="sm:text-5xl text-2xl font-black title-font mb-4 text-white">
                YOUR QUESTION ANSWERED
              </h1>
              {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>  */}
            </div>
            <SimpleAccordion />
          </div>
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
          <p
            className={`flex text-lg sm:text-3xl items-center justify-center mt-8 neonText ${styles.neonText}`}
          >
            Special Diwali Discount till 7th November
          </p>
        </div>
      </section>
    </div>
  );
};

export default BonusSection;
