import React from "react";

const Statistics = () => {
  return (
    <div>
      <section class="text-white bg-black body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap sm:pr-10">
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://i.imgur.com/x4oBqfW.png"
              alt="stats"
            />
          </div>
          <div class="flex flex-wrap mt-auto mb-auto lg:w-1/2 sm:w-full content-start">
            <div class="w-full mt-10 sm:mt-0 sm:ml-10 ml-0 sm:p-4 px-4 mb-6">
              <h1 class="sm:text-5xl text-4xl font-bold text-custom-darkGreen">
                Follow Us on Instagram
              </h1>
            </div>
            <span class="sm:ml-14 -ml-4 mt-8 flex sm:space-x-20 space-x-10">
              <div class="ml-10 sm:ml-0 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font text-3xl text-custom-darkGreen font-bold">
                  90K+
                </h2>
                <p class="leading-relaxed">Followers</p>
              </div>
              <div class="ml-10 sm:ml-0 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font text-3xl text-custom-darkGreen font-bold">
                  480+
                </h2>
                <p class="leading-relaxed">Posts</p>
              </div>
              <div class="ml-10 sm:ml-0 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font text-3xl text-custom-darkGreen font-bold">
                  10+
                </h2>
                <p class="leading-relaxed">Batches</p>
              </div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
