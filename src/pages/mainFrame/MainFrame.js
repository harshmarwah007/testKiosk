import React, { useState } from "react";
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
import {
  Sidebar,
  DrawerProceed,
  DrawerSide,
  CartCard,
  CategoryContent,
} from "../../components";

const MainFrame = () => {
  const navigate = useNavigate();

  const [categoryItems] = useState({
    Drinks: [
      {
        title: "Coke",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0521_MediumCoke_Glass_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Fanta",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/Header_MediumFantaOrange_Glass_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Sprite",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/Header_MediumSprite_Glass_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Diet Coke",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0652_MediumDietCoke_Glass_2_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Frozen Coke",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/Header_MediumFrozenCocaColaClassic_Glass_832x472-1:1-4-product-tile-desktop",
      },
    ],

    BurgersAndWraps: [
      {
        title: "Short Cake McFlurry",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/StrawberryShortcakeMcFlurry_832x472v3:1-4-product-tile-desktop",
      },
      {
        title: "Oreo McFlurry",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_3832_OREOMcFlurry_832x472:1-4-product-tile-desktop",
      },
      {
        title: "M&M McFlurry",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_3830_MandMMcFlurry_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Vanilla Cone",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202106_0336_LargeVanillaCone_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Chocolate Shake",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1509_MediumChocolateShake_Glass_A1_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Vanilla Shake",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1598_MediumVanillaShake_Glass_A1_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Starwberry Shake",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1513_MediumStrawberryShake_Glass_A1_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Hot Fudge Sundae",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0337_HotFudgeSundae_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Hot Caramel Sundae",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0337_HotFudgeSundae_832x472:1-4-product-tile-desktop",
      },
    ],
    Burgers: [
      {
        title: "Big Mac",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_0007-005_QuarterPounderwithCheese_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Double Patty",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Double Cheese",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4282_QuarterPounderCheeseDeluxe_Shredded_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Cheese Burger",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/202002_0592_McDouble_Alt_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Big Mac",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Baconstation",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4295-005_BaconQPC_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Cheeseburger",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Double Cheese",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_0004_DoubleCheeseburger_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
      },
      {
        title: "Hamburger",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0001_Hamburger_Alt_832x472:1-4-product-tile-desktop",
      },
    ],
    Meals: [
      {
        title: "Hamburger Meal",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_6975_HamburgerHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Mc Nuggets Meal",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_7002_4McNuggetsHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Mc Nuggets Meal 6",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_7780_6McNuggetsHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:1-4-product-tile-desktop",
      },
    ],
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sideDrawer, setIsSideDrawer] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsSides, setItemsSide] = useState([]);
  const [drinksCategory, setDrinksCategory] = useState("");
  // const [clickedItem, setClickedItem] = useState({
  //   title: "",
  //   productImage: "",
  // });

  //add items
  const addItem = (item) => {
    console.log(item);
    setItems([...items, item]);
    console.log(items);
  };
  //remove items
  const removeItem = (nameItem) => {
    console.log(nameItem);
    setItems(items.filter((i) => i.title !== nameItem));
    console.log(items);
  };

  // //automatically add the itemsside to items
  // useEffect(() => {
  //   setItems([...items, ...itemsSides]);
  // }, [itemsSides]);

  // //checking the values for drinks on every change
  // useEffect(() => {
  //   console.log(drinksCategory);
  // }, [drinksCategory]);

  //useEffect got checking the clicked item  has some value or not
  // useEffect(() => {
  //   console.log(clickedItem);
  // }, [clickedItem]);

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

      <Sidebar
        drinksCategory={drinksCategory}
        setDrinksCategory={setDrinksCategory}
        // setBurgersAndWrapsCategory={setDrinksCategory}
      />
      <motion.div
        initial={{
          display: "none",
        }}
        animate={{
          //if drinks category is not empty then move the main content to the left
          display:
            drinksCategory === "Drinks"
              ? "block"
              : drinksCategory === "Burgers and Wraps"
              ? "block"
              : drinksCategory === "Burgers"
              ? "block"
              : drinksCategory === "Meals"
              ? "block"
              : "none",
        }}
        className="wrapperComponent"
      >
        <CategoryContent
          Drinks={
            drinksCategory === "Drinks"
              ? categoryItems.Drinks
              : drinksCategory === "Burgers and Wraps"
              ? categoryItems.BurgersAndWraps
              : drinksCategory === "Burgers"
              ? categoryItems.Burgers
              : drinksCategory === "Meals"
              ? categoryItems.Meals
              : []
          }
          //send categoryItems.Drinks if drinksCategory is Drinks, send categoryItems.BurgersAndWraps if drinksCategory is Burgers and Wraps, send categoryItems.Burgers if drinksCategory is Burgers, send "" if drinksCategory is ""
          // Drinks={
          //   drinksCategory === "Drinks"
          //     ? categoryItems.Drinks
          //     : drinksCategory === "Burgers and Wraps"
          //     ? categoryItems.BurgersAndWraps
          //     : ""
          // }
          titleContent={
            drinksCategory === "Drinks"
              ? "Drinks"
              : drinksCategory === "Burgers and Wraps"
              ? "Desserts"
              : drinksCategory === "Burgers"
              ? "Burgers"
              : drinksCategory === "Meals"
              ? "Meals"
              : ""
          }
          drawer={setIsDrawerOpen}
          drawerValue={isDrawerOpen}
          setSide={setIsSideDrawer}
          side={sideDrawer}
        />
      </motion.div>
      {/* Component MainContent */}
      <motion.div
        animate={{
          //if drinks category is not empty then move the main content to the left
          display: drinksCategory === "" ? "block" : "none",
          width: "100%",
        }}
        className="wrapperComponent"
      >
        <MainContent
          drawer={setIsDrawerOpen}
          drawerValue={isDrawerOpen}
          setSide={setIsSideDrawer}
          side={sideDrawer}
          // clickedItem={clickedItem}
          // setClickedItem={setClickedItem}
        />
      </motion.div>

      <Drawer
        drawer={isDrawerOpen}
        setDrawer={setIsDrawerOpen}
        sides={sideDrawer ? false : true}
        addItem={addItem}
        // clickedItem={clickedItem}
      />

      <DrawerProceed drawer={setIsDrawerOpen} isDrawerOpened={isDrawerOpen} />
      <DrawerSide
        itemsSide={itemsSides}
        setItemSides={setItemsSide}
        drawer={setIsDrawerOpen}
        isDrawerOpened={isDrawerOpen}
        sides={sideDrawer ? true : false}
        setSide={setIsSideDrawer}
        addItem={addItem}
      />
      {/* Cart Items */}
      <motion.div
        // Make it draggable
        //make this div full screen on drag
        drag="y"
        //increse height of this div on drag
        // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        //drag with momentum

        // drag
        // //drag upto middle of the screen
        // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        //drag with momentum

        dragElastic={0.1}
        dragMomentum={false}
        initial={{
          y: items.length > 0 ? 0 : 300,
          //delay of 2 seconds
          transition: {
            duration: 0.7,
          },
        }}
        animate={{
          y: items.length > 0 ? 0 : 300,
          //if dragging make increase height
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
                  key={index}
                  title={item.title}
                  priceSide={item.price}
                  backgroundColor="#fbfbf9"
                  imageSide={item.image}
                  removeItem={removeItem}
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
