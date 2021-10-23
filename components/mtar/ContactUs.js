import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <center>
          <div class="container px-5 pb-24 mx-auto">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                If you need answers for your questions or need any help, Please
                Contact Us
              </h1>
              <a
                href="https://wa.me/+916395657006"
                class="flex sm:flex-shrink-0 mx-auto text-black bg-green-400 py-2 px-8 hover:bg-yellow-300 rounded-full text-2xl mt-10  sm:mt-0"
              >
                Contact-Us
              </a>
            </div>
          </div>
        </center>
      </section>
    </div>
  );
};

export default ContactUs;
