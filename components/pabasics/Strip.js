import React from "react";

const Strip = (props) => {
  return (
    <>
      <center>
        <section class="text-green-700 mb-20 body-font bg-custom-green">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex items-center justify-center flex-wrap w-full">
              <h1 class="sm:text-6xl drop-shadow-xl text-2xl font-bold title-font mb-2 text-back">
                {props.text}
              </h1>
            </div>
          </div>
        </section>
      </center>
    </>
  );
};

export default Strip;
