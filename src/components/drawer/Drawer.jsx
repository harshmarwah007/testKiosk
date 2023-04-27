import React, { useState } from "react";
//import router
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

//import css
import "../../styles/components/Drawer/Drawer.css";
import { HiChevronLeft } from "react-icons/hi";
// import {CustomizeCard} from "../../components";
import CustomizeCard from "../productCards/customizeCards/CustomizeCard";

const Drawer = (props) => {

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
        height: props.drawer && props.sides ? "70%" : "0",

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
        <div className="comboMeals">
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
              <div className="price">${quantity * 1.23}</div>
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
        </div>

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
