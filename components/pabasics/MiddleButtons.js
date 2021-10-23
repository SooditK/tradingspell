import React from "react";

const MiddleButtons = () => {
  return (
    <div>
      <div className="flex flex-col text-center w-full mb-16">
        <h1 className=" sm:text-5xl text-white text-xl font-medium">
          ALL THIS IN JUST{" "}
          <span className="my-4 font-bold text-custom-darkGreen text-5xl flex items-center justify-center ">
            ₹399{" "}
          </span>
          <strike className="font-light"> (₹1499)</strike>
          <span className="font-black">73% OFF</span>
        </h1>
        <div className="mt-10 mx-auto sm:mt-16 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <a
              href="https://rzp.io/l/BOPA"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-custom-darkGreen hover:bg-custom-green md:py-4 md:text-lg md:px-10"
            >
              Enroll for Hindi+English
            </a>
          </div>
          <div className="rounded-md shadow ml-0 mt-8 sm:mt-0 sm:ml-10">
            <a
              href="https://rzp.io/l/BOPA"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-custom-green hover:bg-custom-darkGreen md:py-4 md:text-lg md:px-10"
            >
              Enroll for English
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleButtons;
