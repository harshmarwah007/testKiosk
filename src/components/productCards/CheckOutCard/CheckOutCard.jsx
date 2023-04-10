import React from "react";
//importing the css file
import "../../../styles/components/categoriesCard/CheckOutCard.css";

const CheckOutCard = () => {
  return (
    <div className="cardCheckout">
      <div className="productCheckout">
        <div className="imageProductCheckout">
          <img
            src="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MDMVAV-5151-1-5151.png"
            alt=""
          />
        </div>
        <div className="infoCheckout">
          <h3>McVeggie</h3>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            $3.79
          </p>
        </div>
      </div>
      <div className="quantityCheckout">
        <button className="buttonIncrement1">+</button>
        <div className="quantity3">
          <p>1</p>
        </div>
        <button className="buttonDecrement1">-</button>
      </div>
    </div>
  );
};

export default CheckOutCard;
