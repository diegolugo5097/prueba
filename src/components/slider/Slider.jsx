import { Carousel } from "react-responsive-carousel";
import shoes from "../../data/zapato.json";
import favorite from "./../../assets/images/heart.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style/style.css";
import AddCart from "../btnAddCart/AddCart";

const Slider = () => {
  const getShoesByReference = shoes.filter((shoe) => shoe.referencia === "G41");

  const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

  return (
    <>
      <div className="breadcrumb">
        <span>HUSHPUPPIESCO</span>
        <span> / CALZADO</span>
        <span> / ZAPATILLA HOMBRE PELIKAN</span>
      </div>
      <div className="shoes_information">
        <Carousel>
          {getShoesByReference.map((shoe, index) => {
            return (
              <div>
                <img
                  src={shoe.foto}
                  width={196}
                  height={300}
                  key={index}
                  alt={shoe.nombre}
                />
              </div>
            );
          })}
        </Carousel>
        <div className="information">
          <h1 className="title_shoes">ZAPATILLA HOMBRE PELIKAN</h1>
          <h1 className="price_shoes">$00.000</h1>
          <h4 className="code_shoes">Cod. de producto zap-005</h4>
          <h3 className="color_shoes">COLOR</h3>
          <img
            className="image_color"
            width={50}
            height={50}
            src={shoes[10].foto}
            alt=""
          />
          <h3 className="size_title">TALLA</h3>
          <div className="size_shoes">
            {sizes.map((size) => {
              return <span>{size}</span>;
            })}
          </div>
          <div className="guide_size">
            <u>GUÍA DE TALLAS</u>
          </div>
          <div className="add_fav_cart">
            <AddCart />
            <img className="add_fav" src={favorite} alt="favorite" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
