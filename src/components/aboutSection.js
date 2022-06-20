import React from "react";
import "../style/aboutSection.css";

const AboutSection = () => {
  return (
    <div className="aboutSectionContainer">
      <div>
        <img src={require("../assets/picture2.jpg")} alt="picture2" />
        <section>
          <button>About Our Business</button>
          <h1>A Few Words About Us</h1>
          <p>
            Our modelling company is a leading firm of business managers and
            advisors with offices accross the world. We aim to provide you:
          </p>
          <ul>
            <li>Quality research and analysis</li>
            <li>Business advisory experience</li>
            <li>Reliable company management</li>
            <li>Pocket friendly services</li>
            <li>Quality modelling techniques</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
