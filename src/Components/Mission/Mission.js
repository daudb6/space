import React from "react";
import "./Mission.css";
export const Mission = () => {
  return (
    <div className="main-table">
      <table className="mission-table">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr>
          <td>Mission 1</td>
          <td>Description</td>
          <td>Status</td>
          <td>
            <button>Join Mission</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
