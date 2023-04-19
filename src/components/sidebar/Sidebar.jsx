import React from "react";
import { motion } from "framer-motion";

//importing the css
import "../../styles/mainFrame/MainFrame.css";

//importing the components
// import SidebarCardfrom "../../components/productCards/categories/SidebarCard";
import SidebarCard from "../../components/productCards/sidebarCategoryCard/SidebarCard";

const Sidebar = (props) => {
  //function to set item  to drink
  const setDrinks = () => {
    props.drinksCategory === "Drinks"
      ? props.setDrinksCategory("")
      : props.setDrinksCategory("Drinks");
  };
  //set burgers and wraps
  const setBurgersAndWraps = () => {
    props.drinksCategory === "Burgers and Wraps"
      ? props.setDrinksCategory("")
      : props.setDrinksCategory("Burgers and Wraps");
  };

  //set burgers
  const setBurgers = () => {
    props.drinksCategory === "Burgers"
      ? props.setDrinksCategory("")
      : props.setDrinksCategory("Burgers");
  };
  //set meals
  const setMeals = () => {
    props.drinksCategory === "Meals"
      ? props.setDrinksCategory("")
      : props.setDrinksCategory("Meals");
  };

  const parentVariants = {
    animate: {
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,

        //delay for 2 second

        staggerChildren: 0.2,

        //delay
        // Stagger time in seconds // Stagger time in seconds
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial={{
        y: -200,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 80,
          damping: 15,
        },
        transitionDelay: 2.5,
      }}
      className="sidebar"
    >
      <div className="containorLogo">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
            alt=""
          />
        </div>
      </div>

      <motion.div
        variants={parentVariants}
        initial="initial"
        animate="animate"
        className="containorCategories"
      >
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setDrinks}
            productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/90/MENU-702-1-Beverages"
            title="Drinks"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setBurgersAndWraps}
            productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/90/MENU-690-1-Desserts"
            title="Desserts"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setBurgers}
            productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/140/MENU-659-1-Burger-and-wraps"
            title="Gourmet Burgers"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setMeals}
            productImage="https://s7d1.scene7.com/is/image/mcdonalds/nav_happy_meal_160x160:category-panel-left-desktop"
            title="EZ Meals"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setBurgersAndWraps}
            productImage="https://s7d1.scene7.com/is/image/mcdonalds/Menu_LeftRail_mcd-160x160:category-panel-left-desktop"
            title="Mc Backery"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setBurgersAndWraps}
            productImage="https://s7d1.scene7.com/is/image/mcdonalds/snacks_sides_300x300:category-panel-left-desktop"
            title="Fries and Sides"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setBurgersAndWraps}
            productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/90/MENU-4611-1-Sides-and-Dips"
            title="Sides and Dips"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setBurgersAndWraps}
            productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/90/MENU-702-1-Beverages"
            title="Beverages"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setBurgersAndWraps}
            productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/90/Cheese_Burgers_and_Meals-4874-1-4874.png"
            title="Cheese Meals"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setBurgersAndWraps}
            productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/90/MENU-690-1-Desserts"
            title="Desserts"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            setDrinks={setBurgersAndWraps}
            productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/90/Shakes_and_Coolers-4613-1-4613.png"
            title="Shakes and Coolers"
            discount="80% off"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
