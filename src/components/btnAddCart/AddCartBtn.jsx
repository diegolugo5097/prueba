import "./style/style.css";

const AddCartBtn = ({ idShoe, dispatch }) => {
  const handleOnClick = () => {
    dispatch({
      type: "ADD_TO_CART",
      idShoe,
    });
  };

  return (
    <button
      key={idShoe}
      id={idShoe}
      onClick={handleOnClick}
      className="add_cart"
    >
      AÑADIR AL CARRITO
    </button>
  );
};

export default AddCartBtn;
