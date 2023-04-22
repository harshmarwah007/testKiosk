import React, { useState } from "react";
//importing the css files
import "../../../styles/components/categoriesCard/CustomizeCard.css";

const CustomizeCard = (props) => {
  const [quantity, setQuantity] = useState(0);
  //increment
  const increment = () => {
    setQuantity(quantity + 1);
  };
  //decrement
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="customizeCard">
      <div className="customProductInfo">
        <div className="imageCustomProduct">
          <img src={props.imageCustomProduct} alt="image" />
        </div>
        <div className="nameCustomProduct">
          <p className="naemProduct">{props.customProductName}</p>
          <p className="calories">50 cal</p>
        </div>
      </div>
      <div className="customProductQuantity">
        <button onClick={decrement}>-</button>
        <div className="customQuantity">
          {quantity}
          {quantity === 0 ? "" : "x"}
        </div>

        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CustomizeCard;
