import Banner from "../component/Banner";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Summary from "../component/Summary";
import Currency from "../component/Currency";
import Payment from "../component/Payment";
import Value from "../component/Value";
import Pricing from "../component/Pricing";
import Cta from "../component/Cta";
import Footer from "../component/Footer";

function Homepage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Banner />
      <Navbar />
      <Hero />
      <Summary />
      <Currency />
      <Payment />
      <Value />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
}

export default Homepage;
