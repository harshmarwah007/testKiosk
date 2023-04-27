import React from "react";
//importint the css files
import "../../styles/pages/SelectOrder.css";

const SelectOrder = () => {
  return (
    <div className="SelectOrder">
      <div className="logo_SelectOrder">
        <div className="logoImage_SelectOrder">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png
            
            "
            alt=""
          />
        </div>
      </div>
      <div className="header_SelectOrder">
        <h1>Order Location</h1>
      </div>

      <div className="orderTypes_SelectOrder">
        <div className="firstChoose_SelectOrder">
          <div className="imageFirstChoose_SelectOrder">
            {/* <img src="sample.svg" alt="" /> */}
          </div>
          <div className="heading_SelectOrder">
            <h2>DINE IN</h2>
          </div>
        </div>
        <div className="secondChoose_SelectOrder">
          <div className="imageFirstChoose_SelectOrder">
            {/* <img src="sample.svg" alt="" /> */}
          </div>
          {/* <h2>Delivery</h2> */}
            <div className="heading_SelectOrder">
            <h2>TAKE AWAY</h2>
            </div>
        </div>
      </div>
      {/* Language Containor */}
        <div className="language_SelectOrder">
            <div className="firstLanguage_SelectOrder">
                <h2>English</h2>
            </div>
            <div className="firstLanguage_SelectOrder">
                <h2>Hindi</h2>
            </div>
            <div className="firstLanguage_SelectOrder">
                <h2>Arabic</h2>
            </div>


        </div>
    </div>
  );
};

export default SelectOrder;
