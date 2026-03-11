import Banner from "./components/Banner";
import BenefitsBar from "./components/BenefitsBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MosaicBanner from "./components/MosaicBanner";
import ProductShowcase from "./components/ProductShowcase";
import SEOBlock from "./components/SEOBlock";
import { GlobalStyle } from "./global";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <BenefitsBar />
      <ProductShowcase />
      <MosaicBanner />
      <SEOBlock />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
