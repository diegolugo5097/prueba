import "./style/style.css";
import { Carousel } from "react-responsive-carousel";
import AddCartBtn from "../btnAddCart/AddCartBtn";
import { Fragment, useEffect, useState } from "react";

const CompleteLook = ({ state, dispatch }) => {
  const [lookState, setLookState] = useState(null);

  useEffect(() => {
    const value = state;
    setLookState(value);
  }, [state]);

  return (
    <div>
      <div className="complete_title">
        <h2>COMPLETA TU LOOK</h2>
      </div>
      {lookState && (
        <div className="complete_look">
          {lookState.map((shoe, index) => {
            return (
              <Fragment key={index}>
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
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CompleteLook;
