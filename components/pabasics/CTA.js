import React from "react";

const CTA = () => {
  return (
    <div>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
              If you got Questions, We would love to answer them.
            </h1>
            <a href="https://wa.me/+916395657006">
              <button className="flex-shrink-0 text-green-700 bg-custom-green hover:bg-green-700 hover:text-custom-green border-0 py-2 px-8 focus:outline-none rounded text-lg mt-10 sm:mt-0">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
