import React from "react";
import "../style/whatWeDo.css";
import { MdLeaderboard } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdAddchart } from "react-icons/md";
import { FaListOl } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
const WhatWeDo = () => {
  return (
    <div className="whatWeDoContainer">
      <button>Our Services</button>
      <h1>What We Do</h1>
      <div className="cardsContainer">
        <div>
          <MdLeaderboard size={30} />
          <h3>Market Analysis</h3>
          <p>We support your business with fact based market research</p>
        </div>
        <div>
          <MdAccountBalanceWallet size={30} />
          <h3>Funds Management</h3>
          <p>Allowing you to successfully deal with your company's funds</p>
        </div>
        <div>
          <MdAddchart size={30} />
          <h3>PR & Marketing</h3>
          <p>Helping clients expand awareness and manage their reputation</p>
        </div>
        <div>
          <FaListOl size={30} />
          <h3>Business Planning</h3>
          <p>
            Creating an efficient business plan designed to fit your company
          </p>
        </div>
        <div>
          <AiOutlineFileSearch size={30} />
          <h3>Auditing</h3>
          <p>Deep and detailed investigation of your company's activities</p>
        </div>
        <div>
          <AiOutlineMail size={30} />
          <h3>Consulting</h3>
          <p>Focusing on our clients most critical issuesand oppurtunities</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
