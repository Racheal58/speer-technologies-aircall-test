import React from "react";
import { LuArchive } from "react-icons/lu";
import "./Callcard.css";

const CallCard = ({ from, via, check }) => {
  console.log("props", from, via, check);
  return (
    <div className="call-card-container">
      <div>
        <LuArchive size={28} className="call-card-icon" />

        <span className="call-card-text">Archive all Calls</span>
        {description ? <p>tried to call on number</p> : <p></p>}
      </div>
    </div>
  );
};

export default CallCard;
