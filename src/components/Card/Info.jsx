import React from "react";
import AppContext from "../../context";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div>
      <div className="cartEmpty d-flex aling-center justify-center flex-column flex">
        <img
          className="mb-20"
          width="500px"
          height="300px"
          src="./img/dog/cartShopping.png"
          alt="CartShopping"
        />
        <h2>{title}</h2>
        <p className="opaciti-6">{description}</p>
        <button onClick={() => setCartOpened(false)} className="greenButton">
          <img src="./img/arrow.png" alt="Arrow" />
          To bring back
        </button>
      </div>
    </div>
  );
};

export default Info;
