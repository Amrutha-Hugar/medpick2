import React from "react";
import "../Styles/dashboard.scss";
import Leftnav from "../Component/leftnav";
import Rightcontent from "../Component/Rightcontent";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Leftnav />
      <Rightcontent />
    </div>
  );
};

export default Dashboard;
