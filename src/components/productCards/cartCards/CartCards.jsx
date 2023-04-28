import React from "react";
//importing the css fikes inn the ractfile
import "../../../styles/components/categoriesCard/CartCards.css";
//import cross symbol from react icons
import { AiFillCloseCircle } from "react-icons/ai";

const CartCards = (props) => {
  //remove item on click

  return (
    <div
      className="wrapper_CartCard"
      onClick={() => {
        props.openSidebar(true);
      }}
    >
      <div className="crossSymbol">
        <AiFillCloseCircle
          onClick={() => {
            console.log("Hello world");
            props.removeItem(props.title);
          }}
        />
      </div>

      <div className="quantity_CartCard">
        <h5>{props.quantity}</h5>
      </div>
      <div className="containorCards">
        <div className="imageCart">
          <img src={props.imageSide} alt="" />
        </div>
        <div className="productInformation">
          <h5>{props.title}</h5>
          {/* <h5>{props.quantity}</h5> */}
        </div>
      </div>
    </div>
  );
};

export default CartCards;
