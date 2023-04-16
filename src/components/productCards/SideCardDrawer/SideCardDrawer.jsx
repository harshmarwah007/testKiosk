import React, { useState } from "react";
//import motion
import { motion } from "framer-motion";
//importing the css files
import "../../../styles/components/categoriesCard/SideCardDrawer.css";

const SideCardDrawer = (props) => {
  const [clicked, setIsClicked] = useState(false);
  return (
    <motion.div
      whileTap={{ scale: 0.9, rotate: 360, transition: { duration: 0.5 } }}
      animate={{
        backgroundColor: props.backgroundColor,
      }}
      className="SideCardDrawer"
      onClick={() => {
        console.log("Hello wordl");

        setIsClicked(!clicked);
        props.addItem({
          title: props.nameSide,
          price: props.priceSide,
          image: props.imageSide,
        });
      }}
    >
      <div className="image_SideCardDrawer">
        <motion.div
          whileTap={{ scale: 0.9, rotate: 360, transition: { duration: 0.5 } }}
          animate={{
            backgroundColor: clicked ? "#efefef" : props.backgroundColor,

            transition: {
              duration: 0.5,
            },
          }}
          className="circularImageContainor_SideCardDrawer"
        >
          <motion.img
            animate={{
              width: props.widthSide ? props.widthSide : "100px",
              height: props.heightSide ? props.heightSide : "100px",
            }}
            src={props.imageSide}
            alt=""
          />
        </motion.div>
      </div>

      <div className="info_SideCardDrawer">
        <h3>{props.nameSide}</h3>
        <p>${props.priceSide}</p>
      </div>
    </motion.div>
  );
};

export default SideCardDrawer;
