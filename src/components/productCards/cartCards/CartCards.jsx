import React from "react";
//importing the css fikes inn the ractfile
import "../../../styles/components/categoriesCard/CartCards.css";

const CartCards = (props) => {
  return (
    <div className="containorCards">
      <div className="imageCart">
        <img src={props.imageSide} alt="image" />
      </div>
      <div className="productInformation">
        <h5>{props.title}</h5>
      </div>
    </div>
  );
};

export default CartCards;
