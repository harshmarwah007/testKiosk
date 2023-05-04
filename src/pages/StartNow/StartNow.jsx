import React from "react";
//importing the css file
import "../../styles/pages/StartNow.css";
//motion
import { motion } from "framer-motion";
//navigate
import { useNavigate } from "react-router-dom";

const StartNow = () => {
  const navigate = useNavigate();
  return (
    <div className="StartNow">
      <div className="banner_StartNow">
        <img
          src="https://d2mn2a9fb37v58.cloudfront.net/1500_MENU-34-1-1500x2250__6__jpg.png"
          alt="imageColor"
        />
        {/* <video autoPlay loop muted src="https://rr1---sn-ci5gup-qxak.googlevideo.com/videoplayback?expire=1681769221&ei=pW49ZMzlEsPh8wT095bIBw&ip=191.96.185.119&id=o-AKm9YQehf_zi1cTjnCVqitVaubUTyb2jylaFqc5jf0kX&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&spc=99c5CTNgaGh3rjK-_aB9U_mWLuhik6uBd-ZVh51oqA&vprv=1&mime=video%2Fwebm&ns=EuAEzU19OC7kLrYg-wgRrpMM&gir=yes&clen=732305&dur=6.000&lmt=1673585701244658&keepalive=yes&fexp=24007246&c=WEB&txp=631A224&n=fTAiYoRebhYx0Q&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgUXE_bffXRIH7f9JDvyEbsjDyAKrC74w41op7xocBQjoCIQDKjXlpH8B6BtTi1umbM3IjI7S4eEfeGRpuWLmr3muWbQ%3D%3D&redirect_counter=1&rm=sn-p5qee67z&req_id=ec9df6547aa9a3ee&cms_redirect=yes&ipbypass=yes&mh=2C&mip=2401:4900:1c52:2d9:ac62:c20b:51a7:34b7&mm=31&mn=sn-ci5gup-qxak&ms=au&mt=1681747278&mv=m&mvi=1&pl=55&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgDImG5GYxFT-7-SoGdZ4SFWCsSS2lClNi93o31zgHHfoCIGNzi61bFS-ICMiPsmgWqtMOMpBF7mA_h4KBaBE6hz3t"></video> */}
      </div>

      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => {
          navigate("/chooseOrder");
        }}
        className="buttonStart_StartNow"
      >
        {/* <div className="white"></div> */}
        <div className="Heading">
          <div className="logo_StartNow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
              alt=""
            />
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,

                type: "spring",

                stiffness: 100,
              },
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="headers_StartNow"
          >
            <h1>TOUCH TO START</h1>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default StartNow;
