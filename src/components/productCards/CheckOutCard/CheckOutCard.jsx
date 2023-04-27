import React, { useEffect, useState } from "react";
//importing the css file
import "../../../styles/components/categoriesCard/CheckOutCard.css";

const CheckOutCard = (props) => {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    setQuantity(props.quantity);
  }, [props.quantity]);
  //add the quantity
  const addQuantity = () => {
    setQuantity(quantity + 1);
    //changing the total
  };
  //remove the quantity
  const removeQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cardCheckout">
      <div className="productCheckout">
        <div className="imageProductCheckout">
          <img src={props.image} alt="" />
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
        <button className="buttonDecrement1" onClick={removeQuantity}>
          -
        </button>

        <div className="quantity3">
          <p>{quantity}</p>
        </div>

        <button className="buttonIncrement1" onClick={addQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default CheckOutCard;
