import React from "react";
import ArrowBlue from "../icons/arrowblue.svg";
import DropDown from "../icons/downblack.svg";
import Block from "../icons/block.svg";
import Bell from "../icons/bell.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-left">
        <img src={ArrowBlue} className="Navbar-left-icon" />
        <div className="title-text">Incidents.</div>
      </div>
      <div className="Navbar-right">
        <div className="NonBioMedical">
          <div className="NonBioMedical-B">B</div>
          <div className="NonBioMedical-text">NonBioMedical</div>
        </div>
        <div className="selector">
          <div className="selector-title">vijayanagar</div>
          <img src={DropDown} className="selector-icon" />
        </div>
        <div className="Block">
          <img src={Block} />
        </div>
        <div className="Block">
          <img src={Bell} />
        </div>
        <div className="profile">A</div>
      </div>
    </div>
  );
};

export default Navbar;
