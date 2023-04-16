import React from "react";
//importing the framer motion
import { motion } from "framer-motion";

//importing the css file
import "../../styles/mainFrame/MainFrame.css";
//components

import PriceCards from "../../components/productCards/categories/PriceCards";

const CategoryPriceFrame = (props) => {
  return (
    <>
      <motion.div
        animate={{
          x: 0,
          rotate: 0,

          opacity: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 80,
            damping: 10,
          },
          transitionDelay: 2.5,
        }}
        //delay for 2 second

        className="headingCategory"
      >
        <h1>{props.headingFirst}</h1>
        <h4>{props.headingSecond}</h4>
      </motion.div>
      <motion.div
        className="categoryCards"
        // variants={parentVariants}
        // initial="initial"
        // animate="animate"
      >
        {/* Category cards should be added here */}

        <motion.div className="card">
          <PriceCards
            price="2.42"
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div className="card">
          <PriceCards
            price="2.42"
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div className="card">
          <PriceCards
            price="2.42"
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div className="card">
          <PriceCards
            price="2.42"
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div className="card">
          <PriceCards
            price="2.42"
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div className="card">
          <PriceCards
            price="2.42"
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default CategoryPriceFrame;
