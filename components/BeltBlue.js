import React from "react";

const BeltBlue = (props) => {
  return (
    <div>
      <section className="text-black body-font bg-yellow-400">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex items-center justify-center flex-wrap w-full">
            <h1 className="sm:text-6xl drop-shadow-xl text-2xl font-bold title-font mb-2 text-back">
              {props.text}
            </h1>
          </div>
          <h4 className="flex text-lg justify-center items-center mt-4">
            {props.altText}
          </h4>
        </div>
      </section>
    </div>
  );
};

export default BeltBlue;
