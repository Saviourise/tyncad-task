import "../style/heroSection.css";
import React from "react";
import Nav from "./nav";

const HeroSection = () => {
  return (
    <div className="heroSectionContainer">
      <div className="heroSectionBackdrop">
        <Nav />
        <div className="heroText">
          <h1>Professional Business Modelling</h1>
          <p>
            Crofts Accountants provides business modelling, planning, management, and advisory services backed by years of experience in the industry. We offer pocket friendly services at the best quality.
          </p>
                  <div>
            <button>Read More</button>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
