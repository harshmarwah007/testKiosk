import React, { useState, useEffect } from "react";
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
  console.log(props.cart);
  var [totalCart, setTotalCart] = useState(0)
  const navigate = useNavigate();
  const [itemsSides, setItemsSide] = useState([]);
  //add items
  const addItem = (item) => {
    console.log(item);
    setItemsSide([...itemsSides, item]);
  };

  ///function to calculate th total price from the cart
  const totalPrice = () => {
    //creating the total ticket
    var total =0;
    props.cart.map((item) => {
      total = total + parseFloat(item.price);
    }
    );
    //fixing upto 2 decimal places
    total = total.toFixed(2);
    setTotalCart(total);
    
   
    
  };


  //use effect to calculate th total price
  useEffect(()=>
  {
    totalPrice();
    console.log(totalCart);

  }, [props.cart])


  const addItemCart = (item) =>
  {
   //adding the item to the cart
   props.setCart([...props.cart, item]);
   console.log(props.cart)
  }

  return (
    <motion.div
      initial={{
        x: "90%",
        y: "90%",
        width: "20%",
        maxHeight: "300px",
        opacity: 0,
      }}
      animate={{
        x: "0",
        y: "0",
        width: "100%",
        minHeight: "100vh",
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      transition={{
        duration: 0.1,
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
        {/* <CheckOutCard />
        <CheckOutCard />
        <CheckOutCard /> */}

        {props.cart.map((item) => (
          <CheckOutCard
            name={item.title}
            price={item.productPrice ? item.productPrice : item.price}
            image={item.image}
            quantity={item.quantity}
            addItem={addItem}
          />
        ))}
      </motion.div>

      {/* Containor for recommendations */}
      <div className="recommendations">
        <div className="wrapperRecommendations">
          <h1>Others Also Tried This</h1>
          <div className="recommendations_Scrollable">
            <SideCardDrawer
              nameSide="Big Spicy Wrap"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MENU-7254-1-piripiri-mcspicy-paneer-wrap"
              addItem={addItem}
              addSide=
              {
                ()=>
                {
                  //setting the item in the cart 
                  addItemCart({
                    title: "Big Spicy Wrap",
                    price: "1.12",
                    image: "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MENU-7254-1-piripiri-mcspicy-paneer-wrap",
                    quantity: 1,
                  })
  
  
                  return true;
                }
              }
            />
            <SideCardDrawer
              nameSide="Coke Meal"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/170123053511-6492"
              addItem={addItem} 
              addSide={()=>
              {
                //setting the item in the cart 
                addItemCart({
                  title: "Coke Meal",
                  price: "1.12",
                  image: "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/170123053511-6492",
                  quantity: 1,
                })


                return true;
              }}
            />
            <SideCardDrawer
              nameSide="Paneer Burger"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MENU-7252-1-piripiri-spicy-paneer-burger"
              addItem={addItem}
              addSide={()=>
              {
                //setting the item in the cart
                addItemCart({
                  title: "Paneer Burger",
                  price: "1.12",
                  image: "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/MENU-7252-1-piripiri-spicy-paneer-burger",
                  quantity: 1,
                })
              }}
            />
            <SideCardDrawer
              nameSide="Coke Zero Can"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/DIETCC-19-1-19.png"
              addItem={addItem}
              addSide={()=>
              {
                //setting the item in the cart
                addItemCart({
                  title: "Coke Zero Can",
                  price: "1.12",
                  image: "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/DIETCC-19-1-19.png",
                  quantity: 1,
                })
              }}

              
            />
            <SideCardDrawer
              nameSide="Mc Cafe"
              priceSide="1.12"
              backgroundColor="#fbfbf9"
              imageSide="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/CFRMMT-1820-1-1820.png"
              addItem={addItem}
              addSide={()=>
              {
                //setting the item in the cart
                addItemCart({
                  title: "Mc Cafe",
                  price: "1.12",
                  image: "https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/CFRMMT-1820-1-1820.png",
                  quantity: 1,
                })
              }}

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
            <h3>${totalCart}</h3>
          </div>
          <div className="containorButton">
            <button
              className="checkOut1"
              onClick={() => {
                navigate("/paymentMethod");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckOut;
