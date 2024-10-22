import React from "react";
import Navbar from "./Navbar";
import Iincident from "./Iincident";
import "../Styles/rightcontent.scss";
import IncedentSearch from "./incedentSearch";
import Table from "./table";

const Rightcontent = () => {
  return (
    <div className="right-containent">
      <Navbar />
      <Iincident />
      <IncedentSearch />
      <Table />
    </div>
  );
};

export default Rightcontent;
