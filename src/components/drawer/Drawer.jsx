import "./style/style.css";
import ShopContext from "../../context/ShopContext";
import { useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./drawerReducer/drawerReducer";

const Drawer = ({ transitionExit, handleExit }) => {
  const stateInit = useContext(ShopContext);

  const [cartState, dispatch] = useReducer(reducer, stateInit);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const arrayShoe = [];
    cartState.shoes.map((shoe) => {
      cartState.cart.filter((cart) => {
        if (shoe.id === cart.id) {
          arrayShoe.push(Object.assign(shoe, cart));
          setCart(arrayShoe);
        }
      });
    });
  }, [cartState]);

  // const handleOnClick = (idShoe) => {
  //   dispatch({
  //     type: "REMOVE_ITEM_CART",
  //     idShoe: idShoe,
  //   });
  // };

  return (
    <div
      onClick={handleExit}
      className={`drawer ${transitionExit ? "exit" : ""}`}
    >
      <button>Close Drawer</button>
      {cart.map((item) => {
        return (
          <>
            <div className="items_drawer">
              <img
                width={200}
                height={200}
                src={item?.foto}
                alt={item?.nombre}
              />
              <p>{item?.nombre}</p>
              <p>${item?.quantity}</p>
              <p>${item?.precio * item?.quantity}</p>
              {/* <button onClick={handleOnClick(item?.id)}>Eliminar</button> */}
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default Drawer;
