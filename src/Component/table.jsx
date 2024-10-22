import React from "react";
import downloadblack from "../icons/download.svg";

export default function Table() {
  return (
    <div className="Table">
      <table>
        <tr>
          <th>Asset</th>
          <th>Code</th>
          <th>Department</th>
          <th>Date & Time</th>
          <th>Down Time</th>
          <th>Status</th>
          <th>Report</th>
        </tr>
        <tr>
          <td>Ge ECG Machine</td>
          <td>AG-7645698</td>
          <td>Blood Center</td>
          <td>03/04/2023 @ 12.30</td>
          <td>10 hr : 24 m : 32 s </td>
          <td>Cleared</td>
          <td>
            <img src={downloadblack} />
          </td>
        </tr>
        <tr>
          <td>Ge ECG Machine</td>
          <td>AG-7645698</td>
          <td>Blood Center</td>
          <td>03/04/2023 @ 12.30</td>
          <td>10 hr : 24 m : 32 s </td>
          <td>
            <button>Open</button>
          </td>
        </tr>
        <tr>
          <td>Ge ECG Machine</td>
          <td>AG-7645698</td>
          <td>Blood Center</td>
          <td>03/04/2023 @ 12.30</td>
          <td>10 hr : 24 m : 32 s </td>
          <td>Cleared</td>
          <td>
            <img src={downloadblack} />
          </td>
        </tr>
        <tr>
          <td>Ge ECG Machine</td>
          <td>AG-7645698</td>
          <td>Blood Center</td>
          <td>03/04/2023 @ 12.30</td>
          <td>10 hr : 24 m : 32 s </td>
          <td>Cleared</td>
          <td>
            <img src={downloadblack} />
          </td>
        </tr>
      </table>
    </div>
  );
}
