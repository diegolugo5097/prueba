import "./style/style.css";
import { Carousel } from "react-responsive-carousel";
import shoes from "../../data/zapato.json";
import AddCart from "../btnAddCart/AddCart";
import { useState } from "react";
import ShopContext from "../../context/ShopContext";

const CompleteLook = () => {
  const filterCompleteLook = shoes.filter((shoe) => shoe.seccion === "1");

  const [state, setState] = useState(false);

  return (
    <ShopContext.Consumer>
      {(context) => (
        <div>
          <div className="complete_look">
            {filterCompleteLook.map((shoe, index) => {
              return (
                <>
                  <div>
                    <Carousel>
                      <div>
                        <img
                          src={shoe.foto}
                          width={200}
                          height={200}
                          key={index}
                          alt={shoe.nombre}
                          className={"three"}
                        />
                      </div>
                    </Carousel>
                    <div
                      onClick={() => {
                        setState(true);
                      }}
                    >
                      <h3>{shoe.nombre}</h3>
                      <h3>{shoe.precio}</h3>
                      <button
                        onClick={context.addProductToCart.bind(this, shoe)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </ShopContext.Consumer>
  );
};

export default CompleteLook;
