import React from "react";
//importing the css fikes inn the ractfile
import "../../../styles/components/categoriesCard/CartCards.css";

const CartCards = (props) => {
  return (
    <div className="containorCards">
      <div className="imageCart">
        <img src={props.productImage} alt="image" />
      </div>
    </div>
  );
};

export default CartCards;
