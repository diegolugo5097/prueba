import "./style/style.css";
import { useContext, useEffect } from "react";
import ShopContext from "../../context/ShopContext";

const Drawer = ({ transitionExit, handleExit }) => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <div
      onClick={handleExit}
      className={`drawer ${transitionExit ? "exit" : ""}`}
    >
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
      <button>Close Drawer</button>
    </div>
  );
};

export default Drawer;
