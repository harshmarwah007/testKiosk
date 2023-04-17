import React from "react";
//importing the styles
import "../../styles/pages/PaymentSuccess.css";
//importing the navigate
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FinalPage = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{
        x: "90%",
        y: "90%",
        width: "20%",
        maxHeight: "300px",
      }}
      animate={{
        x: "0",
        y: "0",
        width: "100%",
        minHeight: "100vh",
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      exit={{
        x: "90%",
        y: "90%",
        width: "20%",
        maxHeight: "300px",
        opacity: 0,
        transition: {
          duration: 0.2,
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
          <div className="SuccessMessage">
            <motion.h1
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.5,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
            >
              Thank you for your order!
            </motion.h1>
            <h2>Have a nice day!</h2>
          </div>
        </div>
        {/* Containor to show order number  */}
        <div className="orderNumber">
          <h1>Order Number: 23</h1>
        </div>
        {/* Containor to show order number  */}

        <div className="buttonSuccess_OnlinePayment">
          <button
            onClick={() => {
              navigate("/chooseOrder");
            }}
          >
            Order Again
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FinalPage;
