import React from "react";
//importing the css files
import "../../../styles/components/categoriesCard/CustomizeCard.css";

const CustomizeCard = (props) => {
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
        <button>+</button>

        <div className="customQuantity">1</div>

        <button>-</button>
      </div>
    </div>
  );
};

export default CustomizeCard;
