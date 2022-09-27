import "./style/style.css";
import ShopContext from "../../context/ShopContext";
import { useContext, useEffect, useState } from "react";

const Drawer = ({ transitionExit, handleExit }) => {
  const stateInit = useContext(ShopContext);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const arrayShoe = [];
    stateInit.shoes.map((shoe) => {
      stateInit.cart.filter((cart) => {
        if (shoe.id === cart.id) {
          arrayShoe.push(Object.assign(shoe, cart));
          setCart(arrayShoe);
        }
      });
    });
  }, [stateInit]);

  console.log(cart);

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
              <p>${item?.precio * item?.quantity}</p>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default Drawer;
