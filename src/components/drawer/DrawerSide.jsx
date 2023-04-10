import React from "react";

//import back icon (left Arrow)
import { HiChevronLeft } from "react-icons/hi";
//framer motion
import { motion } from "framer-motion";
//importing the components
import { SideCardDrawer } from "../../components";

//importing the css file
import "../../styles/drawer/DrawerSide.css";

const DrawerSide = (props) => {
  return (
    <motion.div
      initial={{
        y: 200,
      }}
      animate={{
        y: props.isDrawerOpened && props.sides ? 0 : 200,
        height: props.isDrawerOpened && props.sides ? "80%" : "0%",
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
            // props.setSide(false);
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
          />
          <SideCardDrawer
            nameSide="Medium"
            priceSide="1.40"
            backgroundColor="#fbfbf9"
            imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/MFRIES-60-1-60.png"
          />
          <SideCardDrawer
            nameSide="Large"
            priceSide="1.93"
            imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/LFRIES-59-1-59.png"
            backgroundColor="#fbfbf9"
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
        </div>
      </div>
    </motion.div>
  );
};

export default DrawerSide;
