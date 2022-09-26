import accesories from "./../../assets/images/14992852_01.jpeg";
import "./style/style.css";
import categoryWomen from "./../../assets/images/7369725_01.jpeg";
import categoryMen from "./../../assets/images/14992852_01.jpeg";
import instagram from "./../../assets/images/instagram.png";
import { useState } from "react";
import imagesExample from "./../../assets/images/21.jpg";

const AccesoriesCategory = () => {
  const [qtyImages, _] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <div className="accesories_content">
        <div className="accesories">
          <img src={accesories} alt="accesories" />
          <a href="">ACCESORIOS</a>
        </div>
        <div className="category">
          <img
            className="accesories_category_women"
            src={categoryWomen}
            alt="category women"
          />
          <a className="accesories_category_women_button" href="">
            MUJER
          </a>
          <img
            className="accesories_category_men"
            src={categoryMen}
            alt="category men"
          />
          <a className="accesories_category_men_button" href="">
            HOMBRE
          </a>
        </div>
      </div>
      <div className="social_media">
        <img src={instagram} alt="" />
        <h3>Instagram - HUSHPUPPIESCO</h3>
      </div>
      <div className="social_images">
        {qtyImages.map((image) => (
          <img src={imagesExample} alt="isntagram" key={image} />
        ))}
      </div>
    </>
  );
};

export default AccesoriesCategory;
