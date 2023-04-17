import React from "react";

//routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

//destructure this
import {
  LoginPage,
  MainFrame,
  ChooseOrder,
  CheckOut,
  PaymentMethod,
  OnlinePayment,
  PaymentSuccess,
  StartNow,
} from "./pages/index";

//motion Animate Presence
import { AnimatePresence } from "framer-motion";

const App = () => {
  //location for creating the unique ids for the routes
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/startNow" element={<StartNow />} />
        <Route path="/mainFrame" element={<MainFrame />} />
        <Route path="/chooseOrder" element={<ChooseOrder />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/paymentMethod" element={<PaymentMethod />} />
        <Route path="/onlinePayment" element={<OnlinePayment />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
