import instagram from "./../../assets/images/instagram.png";
import facebook from "./../../assets/images/facebook.png";
import "./style/style.css";
import rise from "./../../assets/images/rise.png";
import vtex from "./../../assets/images/vtex.png";
import pci from "./../../assets/images/pci.png";
import digicert from "./../../assets/images/digicert.png";
import imagesPay from "../../data/method_pay";

const Footer = () => {
  return (
    <>
      <div className="footer_social">
        <h2>@HUSHPUPPIESCO</h2>
        <hr />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>
      <div className="footer_middle">
        <div className="firt_section">
          <b>SERVICIO AL CLIENTE</b>
          <ul>
            <li>CONTACTANOS</li>
            <li>CAMBIOS Y DEVOLUCIONES</li>
            <li>POLITICAS DE LA TIENDA</li>
            <li>POLITICAS DE DATOS</li>
          </ul>
        </div>
        <div className="second_section">
          <b>MI CUENTA</b>
          <ul>
            <li>MIS PEDIDOS</li>
            <li>MIS DEVOLUCIONES</li>
          </ul>
        </div>
        <div className="three_section">
          <b>RECURSOS</b>
          <ul>
            <li>TIENDAS</li>
            <li>DEVOLUCIONES</li>
          </ul>
        </div>
        <div className="four_section">
          <b>NEWSLETTER</b>
          <ul>
            <li>Registrate para ser el primero en recibir nuestras noticias</li>
            <li>
              <input
                type="text"
                placeholder="E-MAIL"
                className="email_subcription"
              />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="last_section">
        <div className="developers">
          <img src={rise} alt="" />
          <img src={vtex} alt="" />
        </div>
        <hr />
        <div className="certificate">
          <img src={pci} alt="" />
          <img src={digicert} alt="" />
        </div>
        <hr />
        <div className="method_pay">
          <img src={imagesPay[0]} />
          <img src={imagesPay[1]} />
          <img src={imagesPay[2]} />
          <img src={imagesPay[3]} />
          <img src={imagesPay[4]} />
          <img src={imagesPay[5]} />
        </div>
      </div>
    </>
  );
};

export default Footer;
