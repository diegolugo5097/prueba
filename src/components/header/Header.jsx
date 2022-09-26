import "./style/style.css";
import logo from "./../../assets/images/logo-2.png";
import { useState } from "react";
import Drawer from "../drawer/Drawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transitionExit, setTransitionExit] = useState(false);

  const handleExit = () => {
    setTransitionExit(true);
    setTimeout(() => {
      setIsOpen(false);
      setTransitionExit(false);
    }, 500);
  };
  return (
    <>
      <div className="header_sales_percentage">
        <h3>HOT SALES -30% EN SANDALIAS</h3>
      </div>
      <div className="header_sales_service_info">
        <ul className="header_sales_options">
          <li>DIRECTORIO DE TIENDAS</li>
          <li>SERVICIO AL CLIENTE</li>
          <li>MI CUENTA</li>
        </ul>
      </div>
      <div className="header_content">
        <div className="header_logo_search">
          <div className="header_logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="header_search">
          <div className="header_input">
            <input type="text" placeholder="BUSCAR" />
          </div>
          <h2>ENVÍO GRATIS PARA PEDIDOS LOS SUPERIORES A $300.000</h2>
        </div>
      </div>
      <div className="header_nav">
        <ul className="header_nav_items">
          <li>HOMBRE</li>
          <li>MUJER</li>
          <li>BLOG</li>
          <li>HISTORIA</li>
          <li>TIENDAS</li>
        </ul>
        <span className="header_shop">
          <h3 onClick={() => setIsOpen(true)}>CARRITO 0</h3>
        </span>
        {isOpen && (
          <div className={`drawer_container ${transitionExit ? "exit" : ""}`}>
            <Drawer handleExit={handleExit} transitionExit={transitionExit} />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
