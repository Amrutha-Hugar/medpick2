import React from "react";
import Search from "../icons/search.svg";
import filter from "../icons/filter.svg";
import sort from "../icons/sort.svg";
import downloadblack from "../icons/downloadblack.svg";
import downIcon from "../icons/downblack.svg";

export default function IncedentSearch() {
  return (
    <div className="IncedentSearch-container">
      <div className="IncedentSearch-left">
        <div className="search-container">
          <img src={Search} />
          <input type="text" placeholder="Search" />
        </div>
        <div className="selector">
          <div className="selector-text">September</div>
          <img src={downIcon} />
        </div>
        <div className="selector">
          <div className="selector-text">2024</div>
          <img src={downIcon} />
        </div>
        <img src={filter} />
        <img src={sort} />
        <img src={downloadblack} />
      </div>
      <div className="IncedentSearch-right">
        <button>Add incident +</button>
      </div>
    </div>
  );
}
