import React from "react";
import Arrowblack from "../icons/arrowblack.svg";

const Iincident = () => {
  return (
    <div className="Iincident">
      <div className="incidentCard">
        <div className="incidentreport">04</div>
        <div className="incidentreport-link">
          <div className="reporter">Incident reported</div>
          <img src={Arrowblack} />
        </div>
      </div>
      <div className="incidentCard">
        <div className="incidentreport">06</div>
        <div className="incidentreport-link">
          <div className="reporter">Check In</div>
          <img src={Arrowblack} />
        </div>
      </div>
      <div className="incidentCard">
        <div className="incidentreport">03/05</div>
        <div className="incidentreport-link">
          <div className="reporter">Service open</div>
          <img src={Arrowblack} />
        </div>
      </div>
    </div>
  );
};

export default Iincident;
