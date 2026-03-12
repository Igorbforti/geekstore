import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import BenefitsBar from "./components/BenefitsBar";
import { ProductContextProvider } from "./components/contexts/ProductContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MosaicBanner from "./components/MosaicBanner";
import ProductShowcase from "./components/ProductShowcase";
import SEOBlock from "./components/SEOBlock";
import { GlobalStyle } from "./global";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <Banner />
        <BenefitsBar />
        <ProductShowcase />
        <MosaicBanner />
        <SEOBlock />
        <Footer />
        <ToastContainer />
        <GlobalStyle />
      </ProductContextProvider>
    </>
  );
}

export default App;
