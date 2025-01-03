import Banner from "../Components/Banner";
import Breadcrumb from "../Components/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import ProductCarousel from "../Components/ProductCoursel";
import PopularProductSection from "../UI/PopularProductSection";

import ShoppingCartSection from "../UI/ShoppingCartSection";

const ShoppingCartPage = () => {
  return (
    <main>
      <Banner />
      <Navbar />
      <Breadcrumb />
      <ShoppingCartSection />
      <ProductCarousel/>
      <PopularProductSection/>
      <Footer/>
    </main>
  );
};

export default ShoppingCartPage;
