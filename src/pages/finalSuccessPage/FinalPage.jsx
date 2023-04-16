import React from "react";
//importing the styles
import "../../styles/pages/PaymentSuccess.css";

const FinalPage = () => {
  return (
    <div className="PaymentMethod">
      <div className="logoChoose">
        <div className="logoChooseImage">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="wrapperMiddle_OnlinePayment">
        <div className="information_OnlinePayment">
          <div className="SuccessMessage">
            <h1>Thank you for your order!</h1>
            <h2>Have a nice day!</h2>
          </div>
        </div>
        {/* Containor to show order number  */}
        <div className="orderNumber">
          <h1>Order Number: 23</h1>
        </div>
        {/* Containor to show order number  */}

        <div className="buttonSuccess_OnlinePayment">
          <button>Order Again</button>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
