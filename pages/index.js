import Head from "next/head";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CardsNew from "../components/CardsNew";
import Feature from "../components/Feature";
import Feature2 from "../components/Feature2";
import Icons from "../components/Icons";
import BonusSection from "../components/BonusSection";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TRADINGSPELL - NITIN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <HeroSection />
      <CardsNew />
      <Feature />
      <Feature2 />
      <Icons />
      <BonusSection />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
