import React from "react";
import { useState, useEffect } from "react";
//styles
import "../../../styles/components/categoriesCard/CategoriesCard.css";

//import motion libarary
import { motion } from "framer-motion";

const PriceCard = (props) => {
  const [isSelectedItem, setIsSelectedItem] = useState(false);

  //useEffect for the sidebar drawer
  useEffect(() => {
    if (isSelectedItem) {
      props.drawer(true);
    } else {
      props.drawer(false);
    }
  }, [isSelectedItem]);

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

        <motion.div className="containorPriceInfo">
          <motion.h4
            animate={{
              color: isSelectedItem ? "white" : "black",
            }}
          >
            ${props.price}
          </motion.h4>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PriceCard;
