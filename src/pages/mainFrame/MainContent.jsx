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
    props.setSide(true);
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
          // src="bannerVideos/videoplayback.webm"
          src="https://rr2---sn-npoeenez.googlevideo.com/videoplayback?expire=1682598569&ei=SRZKZOPxM-CJsfIPhbO36A8&ip=66.115.165.111&id=o-ANyuC08uEehXroKfz5mU_tK6GB-d9k6_1MsSy3MYwKMM&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&spc=qEK7B3eOHWFek-CCKMGQNaVuuY_YwVbILjBO3LYt0A&vprv=1&mime=video%2Fwebm&ns=ZvfVoQtpi-kDDHmtWEY83d4N&gir=yes&clen=5209639&dur=20.120&lmt=1655937697900605&keepalive=yes&fexp=24007246&c=WEB&txp=5535434&n=VuCGVBu3GMwb3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgZZGA_E0xyoLjkSY7i6EIeLFwbGNsoGq5GApQoGHz_-0CIQDUiMIq32nqBSjlBp3xKcykzVvP6-Y61TpMQVAYXWBZpA%3D%3D&redirect_counter=1&cm2rm=sn-a5meel76&req_id=f3af44fff85ba3ee&cms_redirect=yes&cmsv=e&mh=Cd&mip=122.177.109.197&mm=34&mn=sn-npoeenez&ms=ltu&mt=1682576684&mv=m&mvi=2&pl=21&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJA_8jgsApz5AXifu6FHx-FizRDQT2JB37oduEEr0NvwAiABr5G1C2ZNcnpiqGI2_ZOGPnOtFzuqt1SIuhCh6SuNgA%3D%3D"
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
              addSelectedItem={props.addSelectedItem}
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/CKMHMC-2754-1-2754.png"
              title="Big Mac"
              cartItems={props.cartItems}
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              addSelectedItem={props.addSelectedItem}
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MDMVAV-5151-1-5151.png"
              title="Meals"
              cartItems={props.cartItems}
              discount="80% off"
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              addSelectedItem={props.addSelectedItem}
              drawer={props.drawer}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MAPPFR-6448-1-6448.png"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div
            variants={childVariants}
            className="card"
            onClick={setSideDrawer}
          >
            <CategoriesCard
              drawer={props.drawer}
              addSelectedItem={props.addSelectedItem}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/228/FMPPMX-6457-1-6457.png"
              title="Fries"
              cartItems={props.cartItems}
              discount="80% off"
              setSideDrawer={setSideDrawer}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              addSelectedItem={props.addSelectedItem}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MDMVAV-5151-1-5151.png"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              addSelectedItem={props.addSelectedItem}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/ATCVGM-5280-1-5280.png"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              addSelectedItem={props.addSelectedItem}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MVGMCM-2770-1-2770.png"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              addSelectedItem={props.addSelectedItem}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MSPVMM-5295-1-5295.png"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              addSelectedItem={props.addSelectedItem}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/CLABCK-6013-1-6013.png"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              addSelectedItem={props.addSelectedItem}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              addSelectedItem={props.addSelectedItem}
              productImage="https://04y3u0kr23.execute-api.ap-south-1.amazonaws.com/dev/png/210/MDMVAV-5151-1-5151.png"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              addSelectedItem={props.addSelectedItem}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          {/* <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              sides={true}
              discount="80% off"
            />
          </motion.div> */}
        </motion.div>

        {/* //PriceCard */}
        <PriceFrame
          headingFirst="Popular"
          headingSecond="McDonald's Classics Only"
          drawer={props.drawer}
          cartItems={props.cartItems}
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
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
          <motion.div variants={childVariants} className="card">
            <CategoriesCard
              drawer={props.drawer}
              productImage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/i8cc2ekzmyo7hokzr7z3"
              title="Burger"
              discount="80% off"
              cartItems={props.cartItems}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainContent;
