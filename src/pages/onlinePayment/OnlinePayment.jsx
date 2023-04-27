import React from "react";
//style sheets
import "../../styles/pages/OnlinePayment.css";
// //import components
// import { KeyPad } from "../../components";
//importing  motion
import { motion } from "framer-motion";
import { Rings, ColorRing, Oval } from "react-loader-spinner";
//importing the navigate
import { useNavigate } from "react-router-dom";

const OnlinePayment = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      animate={{
        transition: {
          duration: 0.5,
        },
      }}
      className="PaymentMethod"
    >
      <div className="logoChoose">
        <div className="logoChooseImage">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="wrapperMiddle_OnlinePayment">
        <div className="information_OnlinePayment">
          <h1>Please have a look at the payment machine</h1>
          <Oval height="100" width="100" color="white" secondaryColor="white" />
        </div>
        <div className="buttonSuccess_OnlinePayment">
          <button
            onClick={() => {
              navigate("/paymentSuccess");
            }}
          >
            Complete Payment
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OnlinePayment;
