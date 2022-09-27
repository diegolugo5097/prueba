import "./style/style.css";
import { Carousel } from "react-responsive-carousel";
import { useContext, useReducer } from "react";
import ShopContext from "../../context/ShopContext";
import { reducer } from "../completeLook/completeLookReducer/completeLookReducer";

const ProductRecommended = () => {
  const stateInit = useContext(ShopContext);

  const [cartState, dispatch] = useReducer(reducer, stateInit);

  return (
    <div>
      <div className="recommended_title">
        <h2>PRODUCTOS RECOMENDADOS</h2>
        <hr />
      </div>
      <div className="recommended_look">
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
                  <hr />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductRecommended;
