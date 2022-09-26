import banner from "./../../assets/images/banner.jpg";
import "./style/style.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <a href="">SHOP NOW</a>
    </div>
  );
};

export default Banner;
