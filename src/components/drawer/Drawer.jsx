import "./style/style.css";
import { Fragment, useEffect, useState } from "react";

const Drawer = ({ transitionExit, handleExit, state, dispatch }) => {
  const [drawerState, setDrawerState] = useState(null);

  useEffect(() => {
    const value = state;
    setDrawerState(value);
  }, [state]);

  const handleOnClick = (idShoe) => {
    dispatch({
      type: "REMOVE_ITEM_CART",
      idShoe,
    });
  };

  return (
    <div
      onClick={handleExit}
      className={`drawer ${transitionExit ? "exit" : ""}`}
    >
      <div className="button_drawer">
        <button>X</button>
      </div>
      {drawerState &&
        drawerState.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="items_drawer">
                <img
                  width={200}
                  height={200}
                  src={item?.foto}
                  alt={item?.nombre}
                />
                <p>{item?.nombre}</p>
                <p>${item?.precio}</p>
                <button
                  className="delete_item"
                  onClick={() => handleOnClick(item?.id)}
                >
                  Eliminar
                </button>
              </div>
              <hr />
            </Fragment>
          );
        })}
    </div>
  );
};

export default Drawer;
