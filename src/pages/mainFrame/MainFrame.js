import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Drawer from "../../components/drawer/Drawer";

//importing the css
import "../../styles/mainFrame/MainFrame.css";
//importing the navigate
import { useNavigate } from "react-router-dom";

//components
// import Sidebar from "../../components/sidebar/Sidebar";

import MainContent from "./MainContent";
// import DrawerProceed from "../../components/drawer/DraweProceed";

//importing the components
import { Sidebar, DrawerProceed, DrawerSide, CartCard } from "../../components";

const MainFrame = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sideDrawer, setIsSideDrawer] = useState(false);
  const [items, setItems] = useState([]);
  //add items
  const addItem = (item) => {
    console.log(item);
    setItems([...items, item]);
    console.log(items);
  };
  //remove items
  const removeItem = (item) => {
    console.log(item);
    setItems(items.filter((i) => i !== item));
    console.log(items);
  };

  //use Effect to see the values changing in teh sideDrawer
  useEffect(() => {
    console.log("sideDrawer", sideDrawer);
  }, [sideDrawer]);

  return (
    <motion.div className="containorMain">
      {/* Component Sidebar  */}
      <motion.div
        initial={{
          opacity: 0,
          x: -10,
        }}
        animate={{
          x: 0,
          background: isDrawerOpen ? "black" : "",
          opacity: isDrawerOpen ? 0.5 : 0,
          zIndex: isDrawerOpen ? 1 : -1,
        }}
        exit={{
          opacity: 0,
          x: -10,
          transition: {
            duration: 0.4,
          },
        }}
        className="backgroundSheet"
      ></motion.div>
      <Sidebar />

      <MainContent
        drawer={setIsDrawerOpen}
        drawerValue={isDrawerOpen}
        setSide={setIsSideDrawer}
        side={sideDrawer}
      />
      <Drawer
        drawer={isDrawerOpen}
        setDrawer={setIsDrawerOpen}
        sides={sideDrawer ? false : true}
        addItem={addItem}
      />

      <DrawerProceed drawer={setIsDrawerOpen} isDrawerOpened={isDrawerOpen} />
      <DrawerSide
        drawer={setIsDrawerOpen}
        isDrawerOpened={isDrawerOpen}
        sides={sideDrawer ? true : false}
        setSide={setIsSideDrawer}
        addItem={addItem}
      />
      {/* Cart Items */}
      <motion.div
        initial={{
          y: items.length > 0 ? 0 : 300,
          //delay of 2 seconds
          transition: {
            duration: 0.7,
          },
        }}
        animate={{
          y: items.length > 0 ? 0 : 300,
          transition: {
            duration: 0.7,
          },
        }}
        exit={{
          y: 100,
          transition: {
            duration: 0.4,
          },
        }}
        className="cartItems_MainFrame"
      >
        <div className="items_MainFrame">
          {/* <div className="header_MainFrame">
            <h5>Let's look at your cart</h5>
          </div> */}
          <div className="productCart_MainFrame">
            {/* <CartCard
              title="Fries"
              imageSide="https://d2mn2a9fb37v58.cloudfront.net/90_MENU-4611-1-Sides-and-Dips.png"
            />
            <CartCard
              title="Mc Puff"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://d2mn2a9fb37v58.cloudfront.net/90_MENU-4611-1-Sides-and-Dips.png"
            />
            <CartCard
              title="Small Fries"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://d2mn2a9fb37v58.cloudfront.net/90_MENU-4611-1-Sides-and-Dips.png"
            />
            <CartCard
              title="Large Fries"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://d2mn2a9fb37v58.cloudfront.net/90_MENU-4611-1-Sides-and-Dips.png"
            /> */}

            {items.map((item, index) => (
              //motion children staggering
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,

                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.4,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    duration: 0.8,
                  },
                }}
              >
                <CartCard
                  title={item.title}
                  priceSide={item.price}
                  backgroundColor="#fbfbf9"
                  imageSide="https://d2mn2a9fb37v58.cloudfront.net/90_MENU-4611-1-Sides-and-Dips.png"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="price_MainFrame">
          <button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Next
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MainFrame;
