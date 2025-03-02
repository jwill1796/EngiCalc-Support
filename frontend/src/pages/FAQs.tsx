import React from "react";
import "../styles/styles.css"; // Import styles
import NavBar from "../components/NavBar";

const FAQs = () => {
  return (
    <div className="home-container">
      <div className="container">
        <h1>EngiCalc - Frequently Asked Questions</h1>
          <h2>🔒 Is my data secure?</h2>
          <p>Yes! We use industry standard encryption to secure your data.</p>
          <h2>🚀 Will there be new features?</h2>
          <p>Yes! We plan to add electrical, plumbing, and more in future updates.</p>
        </div>
      </div>
  );
};

export default FAQs;
