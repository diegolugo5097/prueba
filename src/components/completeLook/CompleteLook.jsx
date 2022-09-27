import "./style/style.css";
import { Carousel } from "react-responsive-carousel";
import AddCartBtn from "../btnAddCart/AddCartBtn";
import { useContext, useReducer } from "react";
import { reducer } from "./completeLookReducer/completeLookReducer";
import ShopContext from "../../context/ShopContext";

const CompleteLook = () => {
  const stateInit = useContext(ShopContext);

  const [cartState, dispatch] = useReducer(reducer, stateInit);

  return (
    <div>
      <div className="complete_look">
        {cartState.shoes.map((shoe, index) => {
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
                    />
                  </div>
                </Carousel>
                <div>
                  <h3>{shoe.nombre}</h3>
                  <h3>{shoe.precio}</h3>
                  <AddCartBtn idShoe={shoe.id} dispatch={dispatch} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CompleteLook;
