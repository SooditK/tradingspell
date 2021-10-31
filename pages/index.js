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
// import Countdown from "../components/countdown/Countdown";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TRADINGSPELL - NITIN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Tradingspell is one of the fastest growing Trading Community, that helps you make an edge over Stock Market and make you financially independent."
        ></meta>
        <meta
          name="keywords"
          content="analysis, price, bounce, breakout, business, candlestick, chart, community, discord, earning, edge, entry, exits, expectancy, financial, graphy, growth, index, indicator, intraday, lecture, stocks, market, pattern, price, psychology, risk, screeners, strategy, support, swing, trading, technical, trend"
        ></meta>
      </Head>
      <Navbar />
      <HeroSection />
      <CardsNew />
      <Feature />
      {/* <Countdown /> */}
      <Feature2 />
      <Icons />
      <BonusSection />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
