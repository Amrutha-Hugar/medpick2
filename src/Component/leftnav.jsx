import React from "react";
import Logo from "../icons/logo.svg";
import Dashboard from "../icons/dashboard.svg";
import Assets from "../icons/assets.svg";
import Incidents from "../icons/incidents.svg";
import Services from "../icons/services.svg";
import Request from "../icons/request.svg";
import Users from "../icons/users.svg";
import Reports from "../icons/reports.svg";
import Contactus from "../icons/contactus.svg";
import Logout from "../icons/logout.svg";

import "../Styles/leftnav.scss";

export default function Leftnav() {
  return (
    <div className="Leftnav-content">
      <div className="dashbaord-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="Leftnav-sets">
        <div className="Leftnav-item">
          <img src={Dashboard} />
          <p>Dashboard</p>
        </div>
        <div className="Leftnav-item">
          <img src={Assets} />
          <p>Assets</p>
        </div>
        <div className="Leftnav-item">
          <img src={Incidents} />
          <p>Incidents</p>
        </div>
        <div className="Leftnav-item">
          <img src={Services} />
          <p>Services</p>
        </div>
        <div className="Leftnav-item">
          <img src={Request} />
          <p>Request</p>
        </div>
        <div className="Leftnav-item">
          <img src={Users} />
          <p>Users</p>
        </div>
        <div className="Leftnav-item">
          <img src={Reports} />
          <p>Reports</p>
        </div>
      </div>
      <br />
      <br />
      <div className="contact-container">
        <div className="contact">
          <img src={Contactus} />
          <div className="">Contact us</div>
        </div>
        <div className="contact">
          <img src={Logout} />
          <div className="">Logout</div>
        </div>
      </div>
    </div>
  );
}
