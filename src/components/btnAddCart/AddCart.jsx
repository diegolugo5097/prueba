import "./style/style.css";
import shoes from "./../../data/zapato.json";
import { useReducer, useState } from "react";
import ShopContext from "../../context/ShopContext";

const AddCart = ({ openDrawer, idShoe }) => {
  const filterShoe = shoes.filter((shoe) => shoe.id === idShoe);

  console.log(filterShoe);

  return (
    <ShopContext.Consumer>
      {(context) => (
        <button
          key={idShoe}
          onClick={context.addProductToCart.bind(this, idShoe)}
          className="add_cart"
        >
          AÑADIR AL CARRITO
        </button>
      )}
    </ShopContext.Consumer>
  );
};

export default AddCart;
