import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Drawer from "../../components/drawer/Drawer";

//importing the css
import "../../styles/mainFrame/MainFrame.css";

//components
// import Sidebar from "../../components/sidebar/Sidebar";

import MainContent from "./MainContent";
// import DrawerProceed from "../../components/drawer/DraweProceed";

//importing the components
import { Sidebar, DrawerProceed, DrawerSide } from "../../components";

const MainFrame = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sideDrawer, setIsSideDrawer] = useState(false);
  //use Effect to see the values changing in teh sideDrawer
  useEffect(() => {
    console.log("sideDrawer", sideDrawer);
  }, [sideDrawer]);

  return (
    <motion.div className="containorMain">
      {/* Component Sidebar  */}
      <motion.div
        initial={{
          opacity: 0,
          x: -10,
        }}
        animate={{
          x: 0,
          background: isDrawerOpen ? "black" : "",
          opacity: isDrawerOpen ? 0.5 : 0,
          zIndex: isDrawerOpen ? 1 : -1,
        }}
        exit={{
          opacity: 0,
          x: -10,
        }}
        className="backgroundSheet"
      ></motion.div>
      <Sidebar />

      <MainContent
        drawer={setIsDrawerOpen}
        drawerValue={isDrawerOpen}
        setSide={setIsSideDrawer}
        side={sideDrawer}
      />
      <Drawer
        drawer={isDrawerOpen}
        setDrawer={setIsDrawerOpen}
        sides={sideDrawer ? false : true}
      />

      <DrawerProceed drawer={setIsDrawerOpen} isDrawerOpened={isDrawerOpen} />
      <DrawerSide
        drawer={setIsDrawerOpen}
        isDrawerOpened={isDrawerOpen}
        sides={sideDrawer ? true : false}
        setSide={setIsSideDrawer}
      />
    </motion.div>
  );
};

export default MainFrame;
