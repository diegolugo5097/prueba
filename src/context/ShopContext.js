import React from "react";
import shoes from "./../data/zapato.json";

const filterCompleteLook = shoes.filter((shoe) => shoe.seccion === "1");

export default React.createContext({
  shoes: filterCompleteLook,
  cart: [],
});
