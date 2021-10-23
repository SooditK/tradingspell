import React from "react";
import SimpleAccordion from "./Accordion";
// import BeltGreen from "./BeltGreen";

const BonusSection = () => {
  return (
    <div>
      <section class="text-gray-200 bg-gray-900 body-font">
        {/* <BeltGreen text="BONUSES" /> */}
        <section class="text-black body-font bg-green-300">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex items-center justify-center flex-wrap w-full">
              <h1 class="sm:text-6xl drop-shadow-xl text-2xl font-bold title-font mb-2 text-back">
                BONUSES in MTAR
              </h1>
            </div>
            {/* <h4 class="flex text-lg justify-center items-center mt-4"></h4> */}
          </div>
        </section>
        <div class="container px-5 pb-24 mx-auto -mb-40">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                      {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 class="text-black text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 1: Access to Trading Spell Discord Community
                      </h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-lg text-black">
                        Access to Fastest Growing Trading Community. Get in the
                        Company of people who think like you.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                      {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 class="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 2: Lifetime Support
                      </h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-lg text-black">
                        Get Lifetime Support directly from Nitin.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                      {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 class="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 3: Trading Screeners
                      </h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-lg text-black">
                        No Need to Analyze every chart. Scan Stocks by Technical
                        Screeners for Intraday, Swing & Long Term Trading.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                      {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 class="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 4: Earning Analysis
                      </h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-lg text-black">
                        You will also get to learn about the Fundamental side of
                        the Market.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                      {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 class="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 5: E-Book
                      </h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-lg text-black">
                        You will get the Trading Strategies E-Book with
                        Psychology and Extra Comments.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                      {/* <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div> */}
                      <h2 class="text-gray-900 text-lg title-font font-bold bg-yellow-300 p-1 rounded-md">
                        BONUS 6: Access to Lecture Notes & PDFs
                      </h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-lg text-black">
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
            <div class="flex flex-col text-center w-full mb-10">
              <h1 class="sm:text-5xl text-2xl font-black title-font mb-4 text-white">
                YOUR QUESTION ANSWERED
              </h1>
              {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>  */}
            </div>
            <SimpleAccordion />
          </div>
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
      </section>
    </div>
  );
};

export default BonusSection;
