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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
