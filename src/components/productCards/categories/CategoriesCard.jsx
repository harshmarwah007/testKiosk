import React from "react";
import { useState } from "react";
//styles
import "../../../styles/components/categoriesCard/CategoriesCard.css";

//import motion libarary
import { motion } from "framer-motion";

const CategoriesCard = (props) => {
  const [isSelectedItem, setIsSelectedItem] = useState(false);
  const selectItem = () => {
    setIsSelectedItem(!isSelectedItem);
  };

  return (
    <motion.div
      onClick={selectItem}
      whileTap={{
        scale: 0.5,
        opacity: 0.5,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 80,
          damping: 15,
        },
      }}
      whileHover={{
        background: isSelectedItem ? "#c8161d" : "#efefef",
        color: isSelectedItem ? "#fbfbf9" : "black",
        transition: {
          duration: 0.1,
          type: "spring",
          stiffness: 80,
          damping: 10,
        },
      }}
      animate={{
        background: isSelectedItem ? "#c8161d" : "#fbfbf9",
        color: isSelectedItem ? "#fbfbf9" : "black",
        transition: {
          duration: 0.1,
          type: "spring",
          stiffness: 80,
          damping: 10,
        },
      }}
      className="categoriesCard"
    >
      <motion.div
        whileHover={{
          transition: {
            duration: 0.2,
            type: "spring",
            stiffness: 80,
            damping: 10,
          },
        }}
        className="containorImage"
      >
        <img src={props.productImage} alt="" />
      </motion.div>
      <motion.div className="containorInfo">
        <h4>{props.title}</h4>
        {/* Only  div when having the discount props  */}

        {props.discount ? (
          <motion.div
            animate={{
              background: isSelectedItem ? "#D34549" : "#fbfbf9",
              color: isSelectedItem ? "white" : "black",

              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 80,
                damping: 10,
              },
            }}
            className="discount"
          >
            <p>{props.discount}</p>
          </motion.div>
        ) : (
          <div className="discount"></div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CategoriesCard;
