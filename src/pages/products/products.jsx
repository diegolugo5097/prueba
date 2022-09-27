import Slider from "./../../components/slider/Slider";
import Footer from "./../../components/footer/Footer";
import Header from "./../../components/header/Header";
import ProductDetails from "../../components/productDetails/ProductDetails";
import CompleteLook from "../../components/completeLook/CompleteLook";
import ProductRecommended from "../../components/productRecommended/ProductRecommended";
import { useContext, useReducer } from "react";
import ShopContext from "../../context/ShopContext";
import { reducer } from "./reducer/reducer";

const Product = () => {
  const stateInit = useContext(ShopContext);

  const [cartState, dispatch] = useReducer(reducer, stateInit);
  const values = cartState.shoes;

  const infoProduct = cartState.cart.map((item) => {
    const findShoe = cartState.shoes.find((shoe) => item.id === shoe.id);
    if (findShoe !== null && findShoe !== undefined) {
      return findShoe;
    }
  });

  return (
    <>
      <Header state={infoProduct} dispatch={dispatch} />
      <hr />
      <Slider />
      <ProductDetails />
      <CompleteLook state={values} dispatch={dispatch} />
      <ProductRecommended />
      <Footer />
    </>
  );
};

export default Product;
