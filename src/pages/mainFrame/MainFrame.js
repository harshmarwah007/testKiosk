import React from "react";
//framer motion
import { motion } from "framer-motion";
//importing the Category Card
import CategoriesCard from "../../components/productCards/categories/CategoriesCard";
import Drawer from "../../components/drawer/Drawer";
//importing the css
import "../../styles/mainFrame/MainFrame.css";

//components
import Sidebar from "../../components/sidebar/Sidebar";
import MainContent from "./MainContent";

const MainFrame = () => {
  return (
    <div className="containorMain">
      {/* Component Sidebar  */}
      <Sidebar />

      <MainContent />
      <Drawer />
    </div>
  );
};

export default MainFrame;
