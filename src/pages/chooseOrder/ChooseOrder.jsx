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
      exit={{ opacity: 0 }}
      className="chooseOption"
    >
      {/* <svg
        className="blob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#c8161d"
          d="M44.4,-56.4C54.8,-44.3,58.4,-27.6,63.1,-9.9C67.7,7.9,73.3,26.7,68.2,43.1C63.2,59.4,47.4,73.3,28.8,80.8C10.2,88.2,-11.3,89.3,-27.5,81C-43.6,72.8,-54.3,55.2,-64.7,37.3C-75,19.5,-84.9,1.4,-80.9,-13C-76.9,-27.4,-58.9,-38.1,-43.1,-49.3C-27.3,-60.4,-13.6,-72,1.7,-74C17,-76,34.1,-68.5,44.4,-56.4Z"
          transform="translate(100 100)"
        />
      </svg> */}
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
