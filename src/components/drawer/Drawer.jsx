import React, { useState } from "react";
import { motion } from "framer-motion";

//import css
import "../../styles/components/Drawer/Drawer.css";
import { HiChevronLeft } from "react-icons/hi";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <motion.div
      initial={{
        y: -100,
      }}
      onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      animate={{
        y: 0,
        // opacity: isDrawerOpen ? 1 : 0.1,
        height: isDrawerOpen ? "80%" : "5%",

        transition: {
          duration: 0,
          type: "spring",
          stiffness: 90,
          damping: 10,
        },
      }}
      className="containorDrawer"
    >
      <div className="containorBackButton">
        <HiChevronLeft className="arrow" />
      </div>
      <div className="productImage">
        <div className="image">
          <img
            src="https://mcdindia.com/wp-content/uploads/2023/01/veg-surprise-burger-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="containorInfoProduct">
        <h2>Big Mac</h2>
        <p>$3.78</p>
        <div className="containorQuantity">
          <div className="buttonIncrement">+</div>
          <div className="quantity">1</div>
          <div className="buttonDecrement">-</div>
        </div>
      </div>

      <div className="buttonMore">
        <button className="button1">Customize</button>
        <button className="button2">Done</button>
      </div>

      <div className="combo">
        <div className="containorCombo">
          <div className="headerCombo">
            <h2>
              Combo <br /> Meal
            </h2>
          </div>
          <div className="containorPriceInfo">
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Drawer;
