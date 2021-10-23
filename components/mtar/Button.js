import React from "react";

const Button = () => {
  return (
    <div>
      <div className="flex-row sm:flex items-center justify-center mb-10">
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
  );
};

export default Button;
