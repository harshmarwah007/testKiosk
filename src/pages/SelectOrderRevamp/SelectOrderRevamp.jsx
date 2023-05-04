import React, { useState } from "react";
//importing the css files
import "../../styles/pages/selectOrderRevamp.css";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { Carousel } from "antd";


const SelectOrderRevamp = () => {
  const navigate = useNavigate();
  const [posterClicked, setPosterClicked] = useState(false);
  const clickHandler = () => {
    console.log("Hello world");
    setPosterClicked(true);
  };
  const contentStyle = {
    height: posterClicked ? "75vh" : "100vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit=
      {
        {
          opacity: 0,
        }
      }
      className="mainContainor_selectrevamp"
    >
      <motion.div
        animate={{
          height: posterClicked ? "75vh" : "100vh",
          width: posterClicked ? "100vw" : "100vw",
          transition: { duration: 0.5 },
        }}
        className="containorOrderRevamp"
      >
        <Carousel>
          <motion.div
          onClick={clickHandler}
            animate={{
              height: posterClicked ? "75vh" : "100vh",
              width: posterClicked ? "100vw" : "100vw",
              transition: { duration: 0.5 },
            }}
            className="firstPoster_SelectOrder"
          >
            <motion.video
              animate={{
                height: posterClicked ? "75vh" : "100vh",
                width: posterClicked ? "100vw" : "100vw",
                objectFit: posterClicked ? "cover" : "cover",
                // scale: posterClicked ? 0.9 : 1,
                transition: { duration: 0.5 },
              }}
              className="videoTag"
              autoPlay
              loop
              muted
              src="bannerVideos/reel1.webm"
            ></motion.video>
          </motion.div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </motion.div>

      {/* Containor to select order */}
      <motion.div initial=
      {
        {
          opacity: 0,
          display: "none",
        }
      } animate=
      {
        {
          opacity: 1,
          display: posterClicked ? "block" : "none",
        }
      } className="selectOrderType">
        <div className="containorButton_selectOrderType">
          <motion.button
            initial={{
              // backgroundColor: posterClicked ? "white" : "black",
              x: -200,
            }}
            animate={{
              // backgroundColor: posterClicked ? "white" : "black",
              x: posterClicked ? 0 : -200,
              transition: { duration: 0.5, type: "spring" },
            }}
            className="dine_in_select"
            onClick={() => {
              console.log("Thisis th etest ");
              navigate("/mainFrame");
            }}
          >
            DINE IN
          </motion.button>
          <motion.button
            initial={{
              // backgroundColor: posterClicked ? "white" : "black",
              x: 200,
            }}
            animate={{
              // backgroundColor: posterClicked ? "white" : "black",
              x: posterClicked ? 0 : 200,
              transition: { duration: 0.5, type: "spring" },
            }}
            className="take_away_select"
            onClick={() => {
              console.log("Thisis th etest ");
              navigate("/mainFrame");
            }}
          >
            TAKE AWAY
          </motion.button>
        </div>

        <div className="languages">
          <motion.div
            initial={{
              // backgroundColor: posterClicked ? "white" : "black",
              y: -200,
            }}
            animate={{
              y: posterClicked ? 0 : -200,
              transition: { duration: 0.4, type: "spring" },
            }}
            className="english"
          >
            <div className="flag">
              <div className="logoFlag">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
            </div>
            <div className="nameFlag">
              <p>ENGLISH</p>
            </div>
          </motion.div>

          <div className="english">
            <div className="flag">
              <div className="logoFlag">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
            </div>
            <div className="nameFlag">
              <p>HINDI</p>
            </div>
          </div>

          <div className="english">
            <div className="flag">
              <div className="logoFlag">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAB3CAMAAACAEaSBAAAAGFBMVEUAAAD/zgDdAABvAADoAADaAAD0rAD/0QBKKgvJAAAAgUlEQVR4nO3PwQ2DAAwAsVCg7L8xQ/A5RfYGngEAAAAAAACAD84d5tphfjt4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLTMvcP8d5hnhzl28GjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo2fJ4AcVtaoAIiNiLAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
            </div>
            <div className="nameFlag">
              <p>GERMAN</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SelectOrderRevamp;
