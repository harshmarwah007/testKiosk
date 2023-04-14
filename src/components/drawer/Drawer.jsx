import React, { useState } from "react";
//import router
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

//import css
import "../../styles/components/Drawer/Drawer.css";
import { HiChevronLeft } from "react-icons/hi";
// import {CustomizeCard} from "../../components";
import CustomizeCard from "../productCards/customizeCards/CustomizeCard";

const Drawer = (props) => {
  const navigate = useNavigate();
  const [openCustomize, setOpenCustomize] = useState(false);
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
              src="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/CKMHMC-2754-1-2754.png"
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
              Big Mac
            </motion.h2>
            <motion.p
              animate={{
                fontSize: openCustomize ? "1.3rem" : "2rem",
              }}
            >
              $3.78
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
            <div className="buttonIncrement">+</div>
            <div className="quantity">1</div>
            <div className="buttonDecrement">-</div>
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
              props.addItem({
                title: "Maharaja Mac",
                imageURL:
                  "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/CKMHMC-2754-1-2754.png",
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
              <div className="price">$5.67</div>
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
