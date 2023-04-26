import React, {useState} from "react";

//import back icon (left Arrow)
import { HiChevronLeft } from "react-icons/hi";
//framer motion
import { motion } from "framer-motion";
//importing the components
import { SideCardDrawer } from "../../components";

//importing the css file
import "../../styles/drawer/DrawerSide.css";

const DrawerSide = (props) => {
  //items selected

  const [sides, setSide] = useState([]);

  const addSide = (item) => {
    console.log(item);
    setSide([...sides, item]);
  };
  const doneClick = () =>
  {
    //adding the items one by one into the mainCart
    sides.forEach((item) => {
      props.addCartItem(item);
    });
  }
  //remove items
  // const removeItem = (item) => {
  //   console.log(item);
  //   setItems(items.filter((i) => i !== item));
  //   console.log(items);
  // };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 200,
      }}
      animate={{
        y: props.isDrawerOpened && props.sides ? 0 : 200,
        height: props.isDrawerOpened && props.sides ? "70%" : "0%",
        opacity: props.isDrawerOpened && props.sides ? 1 : 0,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 80,
        },
      }}
      className="sideContainor"
    >
      <div className="back_DrawerSide">
        <HiChevronLeft
          className="arrow"
          onClick={() => {
            props.drawer(false);
            if (props.sides) {
              props.setSide(false);
            }
          }}
        />
      </div>

      {/* Containor For showing the fries  */}
      <div className="scrollableContainor_DrawerSide">
        <div className="wrapper_DrawerSide">
          <SideCardDrawer
            nameSide="Small"
            priceSide="1.12"
            backgroundColor="#fbfbf9"
            imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/SFRIES-61-1-61.png"
            addSide={addSide}
          />
          <SideCardDrawer
            nameSide="Medium"
            priceSide="1.40"
            backgroundColor="#fbfbf9"
            imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/MFRIES-60-1-60.png"
            addSide={addSide}
          />
          <SideCardDrawer
            nameSide="Large"
            priceSide="1.93"
            imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/LFRIES-59-1-59.png"
            backgroundColor="#fbfbf9"
            addSide={addSide}
          />
        </div>
      </div>

      <div className="quanity_SideDrawer">
        <button>+</button>
        <p>1</p>
        <button>-</button>
      </div>

      {/* ContainorShowing the variety of sauces */}
      <div className="SaucesContainor_DrawerSide">
        <h3>Choose Your Sauce</h3>

        <div className="wrapper_DrawerSide23">
          <SideCardDrawer
           
            nameSide="Mustard Sauce"
            priceSide="1.12"
            imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/MUSSCE-290-1-290.png"
            backgroundColor="#f4f3f3"
            widthSide="60px"
          />

          <SideCardDrawer
           
            nameSide="Barbeque Sauce"
            priceSide="1.40"
            imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/BARSCE-289-1-289.png"
            backgroundColor="#f4f3f3"
            widthSide="60px"
          />
          <SideCardDrawer
           
            nameSide="Chilli Sauce Sachet"
            priceSide="1.93"
            imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/CHLSCE-5909-1-5909.png"
            backgroundColor="#f4f3f3"
            widthSide="60px"
          />
          <SideCardDrawer
           
            nameSide="Peri Peri"
            priceSide="1.93"
            imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/LTOPPM-63-1-63.png"
            backgroundColor="#f4f3f3"
            widthSide="60px"
          />
        </div>
      </div>
      <div className="containorDoneDOne_SideCardDrawer">
        <button
          className="DoneButton"
          onClick={() => {
            props.drawer(false);
            //closing the drawer globally
            props.setSide(false);
            doneClick();

            // props.setSide(false);
          }}
        >
          Done
        </button>
      </div>
    </motion.div>
  );
};

export default DrawerSide;
