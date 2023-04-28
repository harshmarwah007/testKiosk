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
// import DrawerProceed from "../../components/drawer/DrawerProceed";

//importing the components
import {
  Sidebar,
  DrawerProceed,
  DrawerSide,
  CartCard,
  CategoryContent,
} from "../../components";

const MainFrame = (props) => {
  const navigate = useNavigate();

  const [categoryItems] = useState({
    Drinks: [
      {
        title: "Coke",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MCOKE-16-1-16.png",
      },
      {
        title: "Sprite",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MSPRT-30-1-30.png",
      },
      {
        title: "Water",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/VEDWAT-5506-1-5506.png",
      },
      {
        title: "Juice",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MIXFBV-6112-1-6112.png",
      },
      {
        title: "Coke Zero",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/DIETCC-19-1-19.png",
      },
    ],

    BurgersAndWraps: [
      {
        title: "Short Cake McFlurry",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/SMFLOR-4-1-4.png",
      },
      {
        title: "Oreo McFlurry",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/RBLKFR-2803-1-2803.png",
      },
      {
        title: "M&M McFlurry",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/BRWMSS-9-1-9.png",
      },
      {
        title: "Vanilla Cone",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/NMFGS-5-1-5.png",
      },
      {
        title: "Chocolate Shake",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1509_MediumChocolateShake_Glass_A1_832x472:1-4-product-tile-desktop",
      },
      {
        title: "Vanilla Shake",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/NMSTR-421-1-421.png",
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
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/VGMHMC-2763-1-2763.png",
      },
      {
        title: "Mc Veggie",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MCVEGB-66-1-66.png",
      },
      {
        title: "Mc Chicken",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MCSCHK-47-1-47.png",
      },
      {
        title: "Veg Maharaja Mac",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/VGMHMC-2763-1-2763.png",
      },
      {
        title: "Aloo Tikki",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MEXALO-3191-1-3191.png",
      },
      {
        title: "Mc Egg",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MSLEGG-5679-1-5679.png",
      },
      {
        title: "Mc Premium",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MSPRCK-5293-1-5293.png",
      },
      {
        title: "Mc Cheese",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/CLABCK-6013-1-6013.png",
      },
      {
        title: "Mc Cheese ",
        productImage:
          "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0001_Hamburger_Alt_832x472:1-4-product-tile-desktop",
      },
    ],
    Meals: [
      {
        title: "Hamburger Meal",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/BPMDMC-6111-1-6111.png",
      },
      {
        title: "Mc Nuggets Meal",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/HMVGNM-6104-1-6104.png",
      },
      {
        title: "Mc Nuggets Meal 6",
        productImage:
          "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/HMEBN2-6177-1-6177.png",
      },
    ],
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sideDrawer, setIsSideDrawer] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsSides, setItemsSide] = useState([]);
  const [drinksCategory, setDrinksCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(
    {
      title: "",
      productImage: "",
      productName: ""
    }
  )




  //adding the items to cart
  const [cartItems, setCartItems] = useState([]);



  //use effect to copy all the items to props.setCart
  useEffect(() => {
    props.setCart(cartItems);
  }, [cartItems]);



  //function to add item in the cart
  const addCartItem = (item) => {
    console.log(item);
    const items = cartItems;
    items.push(item);
    setCartItems([...items]);

    console.log(cartItems);
  };
  const removeCartItem = (nameItem) => {
    console.log(nameItem);
    setCartItems(cartItems.filter((i) => i.title !== nameItem));
    console.log(cartItems);
  };



  //useeffect for the cart items
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);








  //function for adding an item
  const addSelectedItem = (item) => {
    console.log(item);
    setSelectedItem(item);
    console.log(items);
  };
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
          addSelectedItem={addSelectedItem}
          cartItems={cartItems}
         
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
          addSelectedItem={addSelectedItem}
          cartItems={cartItems}
          // clickedItem={clickedItem}
          // setClickedItem={setClickedItem}
        />
      </motion.div>

      <Drawer
        drawer={isDrawerOpen}
        setDrawer={setIsDrawerOpen}
        sides={sideDrawer ? false : true}
        addItem={addItem}
        selectedItem ={selectedItem}
        addCartItem= {addCartItem}

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
        addCartItem= {addCartItem}
      />
      {/* Cart Items */}
      <motion.div
        // Make it draggable
        //make this div full screen on drag
        drag="y"
        //increase height of this div on drag
        // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        //drag with momentum

        // drag
        // //drag upto middle of the screen
        // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        //drag with momentum

        dragElastic={0.1}
        dragMomentum={false}
        initial={{
          y: cartItems.length > 0 ? 0 : 300,
          //delay of 2 seconds
          transition: {
            duration: 0.7,
          },
        }}
        animate={{
          y: cartItems.length > 0 ? 0 : 300,
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

            {cartItems.map((item, index) => (
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
                  quantity={item.quantity}
                  backgroundColor="#fbfbf9"
                  imageSide={item.image}
                  removeItem={removeCartItem}
                  openSidebar={setIsDrawerOpen}
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
