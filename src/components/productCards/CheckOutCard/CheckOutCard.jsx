import React from "react";
//importing the css file
import "../../../styles/components/categoriesCard/CheckOutCard.css";

const CheckOutCard = (props) => {
  return (
    <div className="cardCheckout">
      <div className="productCheckout">
        <div className="imageProductCheckout">
          <img
            src={props.image}
            alt=""
          />
        </div>
        <div className="infoCheckout">
          <h3>{props.name}</h3>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            ${props.price}
          </p>
        </div>
      </div>
      <div className="quantityCheckout">
        <button className="buttonIncrement1">+</button>
        <div className="quantity3">
          <p>{props.quantity}</p>
        </div>
        <button className="buttonDecrement1">-</button>
      </div>
    </div>
  );
};

export default CheckOutCard;
