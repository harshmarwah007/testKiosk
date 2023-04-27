import React from "react";
//usenavigate
import { useNavigate } from "react-router-dom";
//importing the framer motion
import { motion } from "framer-motion";

//importing the css files
import "../../styles/pages/ChooseOrder.css";
const ChooseOrder = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{
        opacity: 0,
        // transition: { duration: 1 },
      }}
      className="chooseOption"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
        className="middleContent"
      >
        <div className="logoChoose">
          <div className="logoChooseImage">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
              alt=""
            />
          </div>
        </div>
        <div className="headerChoose">
          <h1>Choose Your Order</h1>
        </div>
        <div className="orderTypes">
          <motion.div
            whileTap={{
              scale: 0.5,
              transition: { duration: 0.5 },
            }}
            onClick={() => {
              navigate("/mainFrame");
            }}
            className="firstChoose"
          >
            <div className="imageFirstChoose">
              <img src="sample.svg" alt="" />
            </div>
            <h2>Dine-In</h2>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.5,
              transition: { duration: 0.5 },
            }}
            onClick={() => {
              navigate("/mainFrame");
            }}
            className="secondChoose"
          >
            <div className="imageFirstChoose">
              <img src="sampleTakeaway 1.svg" alt="" />
            </div>
            <h2>Take-Away</h2>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseOrder;
