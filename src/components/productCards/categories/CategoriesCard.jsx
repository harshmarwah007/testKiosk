import React from "react";
import { useState, useEffect } from "react";
//styles
import "../../../styles/components/categoriesCard/CategoriesCard.css";

//import motion libarary
import { motion } from "framer-motion";

const CategoriesCard = (props) => {
  const [isSelectedItem, setIsSelectedItem] = useState(false);

  //useEffect for the sidebar drawer
  useEffect(() => {
    if (isSelectedItem) {
      props.drawer(true);
    } else {
      props.drawer(false);
    }
  }, [isSelectedItem]);

  //useEffect to remove item if it is not in cart
  useEffect(() => {
    //finding the item in props.carPSidtItems array
    const item = props?.cartItems?.find((item) => item.title === props.title);
    //if the item is not in the cart
    if (!item) {
      setIsSelectedItem(false);
    }
  }, [props.cartItems]);

  const selectItem = () => {
    setIsSelectedItem(!isSelectedItem);
  };

  //add the selected item
  const addItem = () => {
    props.addSelectedItem({
      title: props.title,
      productImage: props.productImage,
      productName: props.title,
    });
  };

  return (
    <motion.div
      onClick={() => {
        selectItem();
        addItem();
      }}
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
