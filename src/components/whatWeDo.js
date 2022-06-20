import React from "react";
import "../style/whatWeDo.css";
import { BiBarChart } from "react-icons/bi";
import { BiWallet } from "react-icons/bi";
import { MdAddchart } from "react-icons/md";
import { FaListOl } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
const WhatWeDo = () => {
  return (
    <div className="whatWeDoContainer">
      <button>Our Services</button>
      <h1>What We Do</h1>
      <div className="cardsContainer">
        <div>
          <BiBarChart size={30} color="rgb(68, 68, 247)" />
          <h3>Market Analysis</h3>
          <p>We support your business with fact based market research</p>
        </div>
        <div>
          <BiWallet size={30} color="rgb(68, 68, 247)" />
          <h3>Funds Management</h3>
          <p>Allowing you to successfully deal with your company's funds</p>
        </div>
        <div>
          <MdAddchart size={30} color="rgb(68, 68, 247)" />
          <h3>PR & Marketing</h3>
          <p>Helping clients expand awareness and manage their reputation</p>
        </div>
        <div>
          <FaListOl size={30} color="rgb(68, 68, 247)" />
          <h3>Business Planning</h3>
          <p>
            Creating an efficient business plan designed to fit your company
          </p>
        </div>
        <div>
          <AiOutlineFileSearch size={30} color="rgb(68, 68, 247)" />
          <h3>Auditing</h3>
          <p>Deep and detailed investigation of your company's activities</p>
        </div>
        <div>
          <BiMessageDetail size={30} color="rgb(68, 68, 247)" />
          <h3>Consulting</h3>
          <p>Focusing on our clients most critical issuesand oppurtunities</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
