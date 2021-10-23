import React from "react";
import NavBar from "../components/mtar/Navbar";
import HeroSection from "../components/mtar/HeroSection";
import Cards from "../components/mtar/Cards";
import FeatureTable from "../components/mtar/FeatureTable";
import FeatureAcc from "../components/mtar/FeatureAcc";
import Button from "../components/mtar/Button";
import Icons from "../components/mtar/Icons";
import WhyRevision from "../components/mtar/WhyRevision";
import BonusSection from "../components/mtar/BonusSection";
import Testimonials from "../components/mtar/Testimonials";
import ContactUs from "../components/mtar/ContactUs";
import Footer from "../components/mtar/Footer";
import Head from "next/head";

const Mtar = () => {
  return (
    <div>
      <Head>
        <title>MTAR - TRADINGSPELL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <HeroSection />
      <Cards />
      <FeatureTable />
      <FeatureAcc />
      <Button />
      <Icons />
      <WhyRevision />
      <BonusSection />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Mtar;
