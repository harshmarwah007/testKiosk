import React, { useState } from "react";
//import router
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

//import css
import "../../styles/components/Drawer/Drawer.css";
import { HiChevronLeft } from "react-icons/hi";
// import {CustomizeCard} from "../../components";
import CustomizeCard from "../productCards/customizeCards/CustomizeCard";
import SideCardDrawer from "../productCards/SideCardDrawer/SideCardDrawer";

const Drawer = (props) => {
  const [selectedCombo, setSelectedCombo] = useState(false);

  // const navigate = useNavigate();
  //increment function

  const [openCustomize, setOpenCustomize] = useState(false);
  var [quantity, setQuantity] = useState(1);
  //increment
  const incrementQuantity = () => {
    setQuantity(++quantity);
  };
  //decrement
  const decrementQuantity = () => {
    quantity === 1 ? (quantity = 1) : setQuantity(--quantity);
  };
  //open the customize tab
  const openCustomizeTab = () => {
    setOpenCustomize(!openCustomize);
    console.log(openCustomize);
  };

  //close the customizations
  const closeCustomizeTab = () => {
    setOpenCustomize(false);
  };

  return (
    <motion.div
      initial={{
        y: -100,
        height: "0",
      }}
      animate={{
        y: 0,
        // opacity: isDrawerOpen ? 1 : 0.1,
        height: props.drawer && props.sides ? "68%" : "0",

        transition: {
          duration: 0,
          type: "spring",
          stiffness: 90,
          damping: 10,
        },
      }}
      exit={{
        opacity: 0,
      }}
      className="containorDrawer"
    >
      {/* <div className="buttonsDrawer">
        <button>Proceed</button>
      </div> */}
      {/* Wrapper to hide and show the containor */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: props.drawer ? 1 : 0,
        }}
        className="wrapper"
      >
        <div className="containorBackButton">
          <HiChevronLeft
            onClick={() => {
              props.setDrawer(false);
              closeCustomizeTab();
            }}
            className="arrow"
          />
        </div>
        <motion.div
          animate={{
            y: openCustomize ? -10 : 0,

            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 90,
              damping: 10,
            },
          }}
          className="productImage"
        >
          <div className="image">
            <motion.img
              animate={{
                height: openCustomize ? "100px" : "200px",
                width: openCustomize ? "100px" : "200px",
                transition: {
                  duration: 0.2,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                },
              }}
              src={props.selectedItem.productImage}
              alt=""
            />
          </div>
          <div className="containorInfoProduct1">
            <motion.h2
              animate={{
                fontSize: openCustomize ? "1.5rem" : "2rem",
              }}
              className="headingProductDrawer"
            >
              {props.selectedItem.title}
            </motion.h2>
            <motion.p
              animate={{
                fontSize: openCustomize ? "1.3rem" : "2rem",
              }}
            >
              ${quantity * 3.78}
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          animate={{
            display: openCustomize ? "none" : "",
          }}
          className="containorInfoProduct"
        >
          <div className="containorQuantity">
            <div className="buttonDecrement" onClick={decrementQuantity}>
              -
            </div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="quantity"
            >
              {quantity}
            </motion.div>

            <div className="buttonIncrement" onClick={incrementQuantity}>
              +
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            display: openCustomize ? "none" : "",
          }}
          className="buttonMore"
        >
          <button
            onClick={() => {
              openCustomizeTab();
            }}
            className="button1"
          >
            Customize
          </button>
          <button
            className="button2"
            onClick={() => {
              props.setDrawer(false);
              props.addCartItem({
                title: props.selectedItem.title,
                image: props.selectedItem.productImage,
                quantity: quantity,

                price: 3.78,
              });
            }}
          >
            Add to Cart
          </button>
        </motion.div>

        {/* Containor for making the meals combo meals */}
        <motion.div
          whileTap={{
            scale: 1.1,
          }}
          className="comboMeals"
        >
          <motion.div
            //make wodth smaller on seelection
            animate={{
              // width: selectedCombo ? "70%" : "100%",
              // flexDirection: selectedCombo ? "row" : "column",
              transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 80,
                damping: 15,
              },
            }}
            onClick={() => {
              setSelectedCombo(true);
              console.log(selectedCombo);
            }}
            className="wrapper_combo_meals"
          >
            <div className="mealContainor">
              <div className="headerComboMeals">
                <h2>Combo Meal</h2>
              </div>
              <div className="containorProductInfo">
                <div className="imagePart">
                  <img
                    src="https://d2mn2a9fb37v58.cloudfront.net/210_MAPPFR-6448-1-6448.png"
                    alt=""
                  />
                </div>
                <div className="price">$$6.26</div>
                <div
                  className="discount"
                  style={{
                    color: "white",
                    backgroundColor: "#c8161d",
                  }}
                >
                  20% Off
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              opacity: selectedCombo ? 1 : 0,
              // display: selectedCombo ? "" : "none",
              x: selectedCombo ? 0 : -100,
              display: selectedCombo ? "" : "none",
              transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 80,
                damping: 15,
              },
            }}
            className="mealsItems"
          >
            <motion.div
              whileTap={{
                scale: 0.9,
              }}
              className="backButton_Container"
            >
              <motion.div
                whileTap={{
                  scale: 0.9,
                }}
                className="back"
                onClick={() => {
                  setSelectedCombo(false);
                  console.log(selectedCombo);
                }}
              >
                <HiChevronLeft />
              </motion.div>
            </motion.div>
            <div className="wrapper_mealsItems">
              <SideCardDrawer
                nameSide="Small Meal"
                priceSide="1.12"
                backgroundColor="#fbfbf9"
                imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MVGMCM-2770-1-2770.png"
                addSide={() => {
                  return false;
                }}
              />

              <SideCardDrawer
                nameSide="Medium Meal"
                priceSide="1.12"
                backgroundColor="#fbfbf9"
                imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MSPCMM-5283-1-5283.png"
                addSide={() => {
                  return false;
                }}
              />

              <SideCardDrawer
                nameSide="Large Meal"
                priceSide="1.12"
                backgroundColor="#fbfbf9"
                imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MSPVMM-5295-1-5295.png"
                addSide={() => {
                  return false;
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            transform: openCustomize ? "" : "translateX(100%)",
            display: openCustomize ? "" : "none",
            transition: {
              duration: 0.2,
              type: "spring",
              stiffness: 80,
              damping: 15,
            },
          }}
          className="containorCustomize"
        >
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/big_mac_bun"
          />
          {/* <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/big_mac_bun"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          /> */}
          <CustomizeCard
            customProductName="Extra Onions"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/reconstituted_onions"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/big_mac_bun"
          />
          <CustomizeCard
            customProductName="Extra Patty"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/10_1_patty"
          />
          <CustomizeCard
            customProductName="Big Mac Sauce"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/shredded_lettuce"
          />
          <CustomizeCard
            customProductName="Extra Cheese"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180"
          />
          <CustomizeCard
            customProductName="Buffalo Cheese"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180"
          />
          <CustomizeCard
            customProductName="Goat Cheese"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180"
          />
          <CustomizeCard
            customProductName="Pickles"
            imageCustomProduct="https://s7d1.scene7.com/is/image/mcdonalds/pickles"
          />
          {/* <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          />
          <CustomizeCard
            customProductName="Wheat Bun"
            imageCustomProduct="https://c1.wallpaperflare.com/preview/992/138/492/lettuce-fresh-hydroponic-green.jpg"
          /> */}

          <div className="buttonMoreData">
            <button
              className="DoneButton"
              onClick={() => {
                //close the customize modal
                closeCustomizeTab();
              }}
            >
              Done
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
