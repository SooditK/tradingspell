import React from "react";
import Link from "next/link";

const CustomErrorPage = () => {
  return (
    <div>
      <img
        src="https://i.imgur.com/4DcIbmr.png"
        className="flex mx-auto mt-20 justify-center align-center"
        alt="Error"
      />
      <button className="flex rounded-lg hover:bg-blue-500 p-3 bg-blue-600 text-white mx-auto mt-12">
        <Link href="/">Take me back to Home</Link>
      </button>
    </div>
  );
};

export default CustomErrorPage;
