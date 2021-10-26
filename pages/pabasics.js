import React from "react";
import HeroNav from "../components/pabasics/HeroNav";
import Statistics from "../components/pabasics/Statistics";
import WhoIsThisFor from "../components/pabasics/WhoIsThisFor";
import Strip from "../components/pabasics/Strip";
import BasicTable from "../components/pabasics/TableNew";
import MiddleButtons from "../components/pabasics/MiddleButtons";
import Cards from "../components/pabasics/Cards";
import Testimonials from "../components/pabasics/Testimonials";
import CTA from "../components/pabasics/CTA";
import Footer from "../components/pabasics/Footer";
import Head from "next/head";
import Countdown from "../components/countdown/Countdown";

const Pabasics = () => {
  return (
    <div className="App bg-black">
      <Head>
        <title>Price Action - TRADINGSPELL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroNav />
      <Statistics />
      <WhoIsThisFor />
      <Strip text="Deliverables in Basics of Price Action" />
      <div className="flex mx-auto w-11/12 sm:w-3/4 mb-20">
        <BasicTable />
      </div>
      <MiddleButtons />
      <Countdown />
      <Strip text="Massive Learning in Basics of Price Action" />
      <Cards />
      <Strip text="Testimonials" />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Pabasics;
