import React, { useState } from "react";

import { motion } from "framer-motion";



//importing the css files in teh react
import "../../styles/drawer/DrawerProceed.css";

//importing  the category cards
import CartCards from "../../components/productCards/cartCards/CartCards";

const DrawerProceed = (props) => {
  //state for opening the closing of cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <motion.div
      initial={{
        y: 300,
      }}
      animate={{
        y: isCartOpen ? 0 : 300,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 80,
          damping: 15,
        },
      }}
      className="cartDrawer"
    >
      <div className="containorCartItems">
        <div className="carts">
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
          <CartCards
            drawer={props.drawer}
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </div>
        <h1>$9.85</h1>
        <div className="priceItems"></div>
      </div>
    </motion.div>
  );
};

export default DrawerProceed;
