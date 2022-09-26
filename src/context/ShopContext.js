import React from "react";
import products from "./../data/zapato.json";

export default React.createContext({
  products,
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
