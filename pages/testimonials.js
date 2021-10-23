import React from "react";
import Navbar from "../components/NavBar";
import Belt from "../components/testimonials/Belt";
import Card from "../components/testimonials/CardContainer/Card";
import Head from "next/head";

const testimonials = () => {
  return (
    <div>
      <Head>
        <title>Testimonials - TRADINGSPELL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Belt text={"Testimonials"} />
      <div className="bg-gray-900 -mt-4">
        <Card />
      </div>
    </div>
  );
};

export default testimonials;
