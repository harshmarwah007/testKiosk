import React from "react";

//routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//destructure this
import { LoginPage, MainFrame } from "./pages/index";

//motion Animate Presence
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/mainFrame" element={<MainFrame />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
