/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MenuContainer from "./MenuContainer";

const NavBar = () => {
  return (
    <div>
      <header className="text-gray-900 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex items-center justify-center text-2xl">
            <a
              className="-mt-4 sm:mt-0 text-gray-200"
              href="https://www.instagram.com/tradingspell"
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.tradingspell.com/"
              className="flex title-font font-medium items-center text-white ml-4 mb-4 md:mb-0"
            >
              TRADINGSPELL
            </a>
          </div>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a
              href="https://www.tradingspell.com/contact.html"
              className="mr-5 text- text-white"
            >
              Contact Us
            </a>
            {/* <a
              href="https://www.tradingspell.com/privacy.html"
              className="text-white"
            >
              Policy
            </a> */}
          </nav>
          <MenuContainer />
        </div>
      </header>
    </div>
  );
};

export default NavBar;
