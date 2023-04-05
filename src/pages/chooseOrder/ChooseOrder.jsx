import React from "react";
//motion frm framer
import { motion } from "framer-motion";

import "../../styles/pages/ChooseOrder.css";
import { useNavigate } from "react-router-dom";

const ChooseOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="chooseOption">
      <div className="logo1">
        <img
          src="https://production-mds-assets.s3.ap-south-1.amazonaws.com/logo/McDeliveryLogo.png"
          alt="logo"
        />
      </div>
      <div className="containerHeader">
        <h1>Where do you want to eat ?</h1>
      </div>
      <div className="cardsContainor">
        <div
          onClick={() => {
            navigate("/mainFrame");
          }}
          className="eat-in"
        ></div>
        <div className="takeaway"></div>
      </div>
    </div>
  );
};

export default ChooseOrder;
