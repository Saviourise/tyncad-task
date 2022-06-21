import React from "react";
import "../style/footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="logoContainer">
        <img src={require("../assets/logo.png")} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Contact Us</li>
        <li>Join Our Newsletter</li>
        <li>
          <input type="text" placeholder="Email Address" />
        </li>
        <li>Follow Us On Our Social Media</li>
        <FaFacebookSquare size={20} color="#fff" style={{ marginRight: 10 }} />
        <FaTwitterSquare size={20} color="#fff" style={{ marginRight: 10 }} />
        <MdMail size={20} color="#fff" />
      </ul>
      <p>Copyright Crofts Accountants 2020. @ All Rights Reserved</p>
    </div>
  );
};

export default Footer;
