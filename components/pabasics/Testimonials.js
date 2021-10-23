import React from "react";
// import img from "next/img";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container py-24 p-4 mx-auto -mt-28">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-700 p-2 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center"
                  src="https://i.imgur.com/aWQwKSD.jpg"
                  alt="content"
                />
                {/* <h2 className="text-lg text-white font-medium title-font mb-4">
                  <center>Bhaumik</center>
                </h2> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-700 p-2 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center"
                  src="https://i.imgur.com/mgUKGf1.jpg"
                  alt="content"
                />
                {/* <h2 className="text-lg text-white font-medium title-font mb-4">
                  <center>Sai Vignesh</center>
                </h2> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-700 p-2 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center"
                  src="https://i.imgur.com/q1IOmx7.jpg"
                  alt="content"
                />
                {/* <h2 className="text-lg text-white font-medium title-font mb-4">
                  <center>Neha</center>
                </h2> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-700 p-2 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center"
                  src="https://i.imgur.com/ynWcjPA.jpg"
                  alt="content"
                />
                {/* <h2 className="text-lg text-white font-medium title-font mb-4">
                  <center>Snehlata</center>
                </h2> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 mt-0 sm:-mt-16">
              <div className="bg-gray-700 p-2 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center"
                  src="https://i.imgur.com/llndKRt.jpeg"
                  alt="content"
                />
                {/* <h2 className="text-lg text-white font-medium title-font mb-4">
                  <center>Adesh</center>
                </h2> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 mt-0 sm:-mt-16">
              <div className="bg-gray-700 p-2 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center"
                  src="https://i.imgur.com/mwa6QWw.jpg"
                  alt="content"
                />
                {/* <h2 className="text-lg text-white font-medium title-font mb-4">
                  <center>Rohit</center>
                </h2> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 mt-0 sm:-mt-32">
              <div className="bg-gray-700 p-2 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center"
                  src="https://i.imgur.com/8K7asWZ.jpg"
                  alt="content"
                />
                {/* <h2 className="text-lg text-white font-medium title-font mb-4">
                  <center>Khushi Sharma</center>
                </h2> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 mt-0 sm:-mt-4">
              <div className="bg-gray-700 p-2 rounded-lg">
                <img
                  className="h-50 rounded w-full object-cover object-center"
                  src="https://i.imgur.com/OChTkye.jpg"
                  alt="content"
                />
                {/* <h2 className="text-lg text-white font-medium title-font mb-4">
                  <center>Vimalan</center>
                </h2> */}
              </div>
            </div>
            <div className="mt-10 mx-auto sm:mt-16 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Link
                  href="/testimonials"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-custom-green hover:bg-green-700 hover:text-custom-green md:py-4 md:text-lg md:px-10"
                >
                  <a>More Testimonials</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
