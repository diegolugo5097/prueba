import "./style/style.css";
import categoryWomen from "./../../assets/images/7369725_01.jpeg";
import categoryMen from "./../../assets/images/14992852_01.jpeg";

const Category = () => {
  return (
    <>
      <div className="category">
        <div className="category_men">
          <img src={categoryMen} alt="category men" />
          <a href="">HOMBRE</a>
        </div>
        <div className="category_women">
          <img src={categoryWomen} alt="category women" />
          <a href="">MUJER</a>
        </div>
      </div>
    </>
  );
};

export default Category;
