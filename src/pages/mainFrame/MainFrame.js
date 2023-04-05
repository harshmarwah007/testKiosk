import React, { useState } from "react";
import { motion } from "framer-motion";

import Drawer from "../../components/drawer/Drawer";

//importing the css
import "../../styles/mainFrame/MainFrame.css";

//components
import Sidebar from "../../components/sidebar/Sidebar";

import MainContent from "./MainContent";
import DrawerProceed from "../../components/drawer/DraweProceed";

const MainFrame = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <motion.div className="containorMain">
      {/* Component Sidebar  */}
      <motion.div
        initial={{
          x: -10,
        }}
        animate={{
          x: 0,
          background: isDrawerOpen ? "black" : "",
          opacity: isDrawerOpen ? 0.5 : 0,
          zIndex: isDrawerOpen ? 1 : -1,
        }}
        className="backgroundSheet"
      ></motion.div>
      <Sidebar />

      <MainContent drawer={setIsDrawerOpen} drawerValue={isDrawerOpen} />
      <Drawer drawer={isDrawerOpen} setDrawer={setIsDrawerOpen} />

      <DrawerProceed drawer={setIsDrawerOpen} isDrawerOpened={isDrawerOpen} />
    </motion.div>
  );
};

export default MainFrame;
