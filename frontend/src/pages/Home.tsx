import React from "react";
import HeroCarousel from "../components/HeroCarousel";

const Home: React.FC = () => {
  return (
    <div className="home-container">

      <div className="container">
        {/* 🏗️ Welcome Section */}
        <h1>Welcome to EngiCalc</h1>
        <p>The ultimate engineering calculator for construction professionals.</p>

        {/* 🚀 Features Section */}
        <div className="features">
          <h2 className="underline">Why Choose EngiCalc?</h2>
          <ul>
            <li>📏 Accurate Construction Calculations</li>
            <li>📂 Save & Organize Your Projects</li>
            <li>⚡ Fast & Mobile-Friendly Interface</li>
          </ul>
        </div>

        {/* 🎯 Call to Action */}
        <div className="cta-section">
          <a href="https://apps.apple.com/us/app/engicalc/id6742305878" className="cta-button">
            Try EngiCalc Now 🚀
          </a>
          <p className="platform-text">Available only on iOS</p>
          <p className="platform-text">Coming soon to Android</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
