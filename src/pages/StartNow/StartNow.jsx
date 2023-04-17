import React from "react";
//importing the css file
import "../../styles/pages/StartNow.css";
//motion
import { motion } from "framer-motion";
//navigate
import { useNavigate } from "react-router-dom";

const StartNow = () => {
  const navigate = useNavigate();
  return (
    <div className="StartNow">
      <div className="banner_StartNow">
        <img
          src="https://d2mn2a9fb37v58.cloudfront.net/1500_MENU-34-1-1500x2250__6__jpg.png"
          alt=""
        />
      </div>

      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => {
          navigate("/chooseOrder");
        }}
        className="buttonStart_StartNow"
      >
        {/* <div className="white"></div> */}
        <div className="Heading">
          <div className="logo_StartNow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
              alt=""
            />
          </div>
          <motion.div
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
            whileTap={{
              scale: 0.9,
            }}
            className="headers_StartNow"
          >
            <h1>TOUCH TO START</h1>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default StartNow;
