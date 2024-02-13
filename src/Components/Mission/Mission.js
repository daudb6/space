import React from "react";
import "./Mission.css";
export const Mission = () => {
  return (
    <div className="main-table">
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thaicom</td>
            <td className="justi">
              Thaicom is the name of a series of communications satellites
              operated from Thailand, and also the name of Thaicom Public
              Company Limited, which is the company that owns and operates the
              Thaicom satellite fleet and other telecommunication businesses in
              Thailand and throughout the Asia-Pacific region. The satellite
              projects were named Thaicom by the King of Thailand, His Majesty
              the King Bhumibol Adulyadej, as a symbol of the linkage between
              Thailand and modern communications technology.
            </td>
            <td>
              <p>Not a Member</p>
            </td>
            <td>
              <button>Join Mission</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
