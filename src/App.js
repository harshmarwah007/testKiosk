import React, {useState} from "react";

//routing
import {

  Routes,
  Route,
  useLocation,
} from "react-router-dom";

//destructure this
import {
  // LoginPage,
  MainFrame,
  ChooseOrder,
  CheckOut,
  PaymentMethod,
  OnlinePayment,
  PaymentSuccess,
  StartNow,
  SelectOrder,
} from "./pages/index";

//motion Animate Presence
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [cart, setCart] = useState([]);
  //location for creating the unique ids for the routes
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartNow />} />
        <Route path="/startNow" element={<StartNow />} />
        <Route path="/mainFrame" element={<MainFrame cart={cart} setCart={setCart} />} />
        <Route path="/chooseOrder" element={<ChooseOrder />} />
        <Route path="/checkout" element={<CheckOut cart={cart} setCart={setCart} />} />
        <Route path="/paymentMethod" element={<PaymentMethod />} />
        <Route path="/onlinePayment" element={<OnlinePayment />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="/selectOrder" element={<SelectOrder />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
