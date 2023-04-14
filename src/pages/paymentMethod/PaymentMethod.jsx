import React from "react";
//style sheet
import "../../styles/paymentMethod/PaymentMethod.css";
//import motion
import { motion } from "framer-motion";
//import navigate
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
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
      <div className="wrapperMiddle_PaymentOptions">
        <h1>Ready to checkout?</h1>
        <div className="cards_PaymentMethod">
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 100,
              },
            }}
            exit={{
              y: "-100%",
              opacity: 0,
              transition: { duration: 0.5 },
            }}
            onClick={() => {
              navigate("/mainFrame");
            }}
            className="firstCard_PaymentMethod"
          >
            <div className="wrapperFirst_PaymentMethod"></div>
            <div className="wrapperFirstHeader_PaymentMethod">
              <h1>Pay Online</h1>
            </div>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 100,
              },
            }}
            whileTao={{
              scale: 0.9,
            }}
            exit={{
              x: "100%",
              opacity: 0,
              transition: { duration: 0.5 },
            }}
            className="firstCard_PaymentMethod"
          >
            <div className="wrapperSecond_PaymentMethod">
              {/* <video
                className="lottie"
                autoPlay
                loop
                muted
                src="https://cdnl.iconscout.com/lottie/premium/thumb/female-cashier-5482755-4603857.mp4"
              ></video> */}
            </div>
            <div className="wrapperFirstHeader_PaymentMethod">
              <h1>Pay at counter</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentMethod;
