import React from "react";
//import framer
import { motion } from "framer-motion";

//importing the css files
import "../../styles/mainFrame/MainFrame.css";

//importing the components
import CategoriesCard from "../../components/productCards/categories/CategoriesCard";

const MainContent = () => {
  const parentVariants = {
    animate: {
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,

        staggerChildren: 0.1, // Stagger time in seconds
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
    //   initial={{
    //     y: "-100%",
    //   }}
    //   animate={{
    //     y: "0",
    //     opacity: 1,
    //     transition: {
    //       duration: 0.5,
    //       type: "spring",
    //       stiffness: 80,
    //       damping: 15,
    //     },
    //     transitionDelay: 2.5,
    //   }}
      className="mainContent"
    >
      <motion.div
        initial={{
          y: "-100%",
        }}
        animate={{
          y: "0",
          opacity: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 80,
            damping: 15,
          },
          transitionDelay: 2.5,
        }}
        className="banners"
      >
        {/* Caroisel should be added here for all the banners and posters  */}
        {/* <div className="bannerPortrait">
            <img src="https://pbs.twimg.com/media/DxmpBcrUcAAOLgP.jpg" alt="" />
          </div>
          <div className="bannerLandscape">
            <img
              src="https://mcdonaldsblog.in/wp-content/uploads/2021/10/T20-Lead-Cover.png"
              alt=""
            />
          </div> */}
      </motion.div>
      <div className="category">
        <motion.div
          animate={{
            x: 0,
            rotate: 0,

            opacity: 1,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 80,
              damping: 10,
            },
            transitionDelay: 2.5,
          }}
          //delay for 2 second

          className="headingCategory"
        >
          <h2>Hey, </h2>
          <h3>what's up?</h3>
        </motion.div>
        <motion.div
          className="categoryCards"
          variants={parentVariants}
          initial="initial"
          animate="animate"
        >
          {/* Category cards should be added here */}
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c74108490c0ec3db9123681b90fa003d"
              title="Burger"
              discount="40% off"
            />
          </motion.div>
        </motion.div>
        <motion.div
          animate={{
            x: 0,
            rotate: 0,

            opacity: 1,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 80,
              damping: 10,
            },
            transitionDelay: 2.5,
          }}
          //delay for 2 second

          className="headingCategory"
        >
          <h2>Hey, </h2>
          <h3>what's up?</h3>
        </motion.div>
        <motion.div
          className="categoryCards"
          variants={parentVariants}
          initial="initial"
          animate="animate"
        >
          {/* Category cards should be added here */}
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c74108490c0ec3db9123681b90fa003d"
              title="Burger"
              discount="40% off"
            />
          </motion.div>
        </motion.div>
        <motion.div
          animate={{
            x: 0,
            rotate: 0,

            opacity: 1,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 80,
              damping: 10,
            },
            transitionDelay: 2.5,
          }}
          //delay for 2 second

          className="headingCategory"
        >
          <h2>Hey, </h2>
          <h3>what's up?</h3>
        </motion.div>
        <motion.div
          className="categoryCards"
          variants={parentVariants}
          initial="initial"
          animate="animate"
        >
          {/* Category cards should be added here */}
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="20% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c74108490c0ec3db9123681b90fa003d"
              title="Burger"
              discount="40% off"
            />
          </motion.div>
        </motion.div>
      </div>
      
    </motion.div>
  );
};

export default MainContent;
