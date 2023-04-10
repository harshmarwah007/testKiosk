import React from "react";
//import framer
import { motion } from "framer-motion";

//importing the css files
import "../../styles/mainFrame/MainFrame.css";

//importing the components
import CategoriesCard from "../../components/productCards/categories/CategoriesCard";
import PriceFrame from "../../components/categoryPriceFrame/CategoryPriceFrame";

const MainContent = (props) => {
  //function to set the side drawer open for the category Card
  const setSideDrawer = () => {
    console.log("Hello world");
    props.setSide(!props.side);
    console.log(props.side);
  };

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
    <motion.div className="mainContent">
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
        {/* Video */}
        <video
          className="videoBanner"
          autoPlay
          loop
          muted
          src="bannerVideos/videoplayback.webm"
        ></video>

        {/* Video */}
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
          t
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
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MDMVAV-5151-1-5151.png"
              title="Meals"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/CLABCK-6013-1-6013.png"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div
            variants={childVariants}
            className="card"
            onClick={setSideDrawer}
          >
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://d2mn2a9fb37v58.cloudfront.net/90_MENU-4611-1-Sides-and-Dips.png"
              title="Cheese Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/VGMHMC-2763-1-2763.png"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/ATCVGM-5280-1-5280.png"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MVGMCM-2770-1-2770.png"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MSPVMM-5295-1-5295.png"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/CLABCK-6013-1-6013.png"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MDMVAV-5151-1-5151.png"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              sides={true}
              discount="80% off"
            />
          </motion.div>
        </motion.div>

        {/* //PriceCard */}
        <PriceFrame
          headingFirst="Hey,"
          headingSecond="what's up"
          drawer={props.drawer}
        />

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
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainContent;
