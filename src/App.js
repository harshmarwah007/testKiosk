import React from "react";

//routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//destructure this
import { LoginPage, MainFrame } from "./pages/index";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainFrame" element={<MainFrame />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
