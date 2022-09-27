import Slider from "./../components/slider/Slider";
import Footer from "./../components/footer/Footer";
import Header from "./../components/header/Header";
import ProductDetails from "../components/productDetails/ProductDetails";
import CompleteLook from "../components/completeLook/CompleteLook";
import ProductRecommended from "../components/productRecommended/ProductRecommended";

const Product = () => {
  return (
    <>
      <Header />
      <hr />
      <Slider />
      <ProductDetails />
      <CompleteLook />
      <ProductRecommended />
      <Footer />
    </>
  );
};

export default Product;
