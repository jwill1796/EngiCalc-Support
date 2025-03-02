import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import FAQs from "./pages/FAQs";
import DarkBackground from "./assets/Dark.png"; // Background image

const App: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${DarkBackground})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Router basename="/EngiCalc-Support">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
