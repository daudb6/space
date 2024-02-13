import React, { useState } from "react";
import "./Mission.css";
export const Mission = () => {
  let [data, setData] = useState(null);
  const fetchMission = async () => {
    const mData = await fetch("https://api.spacexdata.com/v3/missions");
    setData(await mData.json());
    //console.log(data);
  };
  fetchMission();
  return (
    <>
      {!data ? (
        <h1>Loading......</h1>
      ) : (
        <>
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
              {data.map((d) => {
                return (
                  <tbody>
                    <tr>
                      <td>{d.mission_name}</td>
                      <td className="justi">{d.description}</td>
                      <td>
                        <p>Not a Member</p>
                      </td>
                      <td>
                        <button>Join Mission</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </>
      )}
    </>
  );
};
