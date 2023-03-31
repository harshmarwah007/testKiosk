import React from "react";
import { motion } from "framer-motion";

//importing the css
import "../../styles/mainFrame/MainFrame.css";

//importing the components
// import SidebarCardfrom "../../components/productCards/categories/SidebarCard";
import SidebarCard from "../../components/productCards/sidebarCategoryCard/SidebarCard";

const Sidebar = () => {
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
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
        <motion.div variants={childVariants} className="card">
          <SidebarCard
            productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
            title="Burger"
            discount="80% off"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
