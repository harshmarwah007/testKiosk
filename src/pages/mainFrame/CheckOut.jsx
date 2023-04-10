import React from "react";
import { useNavigate } from "react-router-dom";
//importing the css
import "../../styles/pages/CheckOut.css";
//motion
import { motion } from "framer-motion";
//icons
import { AiFillCaretLeft } from "react-icons/ai";
//importing the components
import { CheckOutCard, SideCardDrawer } from "../../components";

const CheckOut = (props) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{
        x: "50%",
        y: "50%",
        width: "20%",
        maxHeight: "300px",
      }}
      animate={{
        x: "0",
        y: "0",
        width: "100%",
        minHeight: "100vh",

        transition: {
          duration: 1,
          type: "spring",
          stiffness: 80,
        },
      }}
      className="checkOut"
    >
      <div className="backAndLanguage">
        <div className="goBack" onClick={() => navigate(-1)}>
          <AiFillCaretLeft />
          <h4>Back</h4>
        </div>
        <div className="language"></div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          y: 0,
          opacity: 0.6,
          transition: {
            duration: 1.5,
            type: "spring",
            stiffness: 100,
          },
        }}
        exit={{
          opacity: 0,
          y: -10,
        }}
        className="checkOutLogo"
      >
        <div className="imageCheckOut">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.5,
            type: "spring",
            stiffness: 100,
          },
        }}
        exit={{
          opacity: 0,
          y: -10,
        }}
        className="checkOutOrderType"
      >
        <h1>My</h1>
        <h1>Order</h1>
        <p>Take Out</p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          y: 0,

          opacity: 1,
          transition: {
            duration: 1.5,
            type: "spring",
            stiffness: 100,
          },
        }}
        exit={{
          opacity: 0,
          y: -10,
        }}
        className="checkOutOrders"
      >
        <CheckOutCard />
        <CheckOutCard />
        <CheckOutCard />
      </motion.div>

      {/* Containor for recommendations */}
      <div className="recommendations">
        <div className="wrapperRecommendations">
          <h1>Others Also Tried This</h1>
          <div className="recommendations_Scrollable">
            <SideCardDrawer
              nameSide="Small"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/SFRIES-61-1-61.png"
            />
            <SideCardDrawer
              nameSide="Burger"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MDMVAV-5151-1-5151.png"
            />
            <SideCardDrawer
              nameSide="Large"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/SFRIES-61-1-61.png"
            />
            <SideCardDrawer
              nameSide="Small"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/SFRIES-61-1-61.png"
            />
            <SideCardDrawer
              nameSide="Small"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/110/SFRIES-61-1-61.png"
            />
          </div>
        </div>
      </div>
      {/* Playwrite Testting tool */}

      {/* Promo Code  */}
      <div className="promoCode">
        <div className="wrapperPromoCode">
          <div className="promoCodeInput">
            <input type="text" placeholder="Promo Code" />
          </div>
          <div className="promoCodeButton">
            <button>Apply</button>
          </div>
        </div>
      </div>

      <div className="priceCheckOut">
        <div className="wrapperPriceCheckOut">
          <div className="totalCheckOut">
            <h4>Total</h4>
            <h3>$1.23</h3>
          </div>
          <div className="containorButton">
            <button className="checkOut1">Checkout</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckOut;
