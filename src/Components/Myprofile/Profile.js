import React, { useEffect } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";

const Profile = () => {
  const mData = useSelector((state) => state.missionReducer.mission);
  const rData = useSelector((state) => state.rocketReducer.rocket);
  return (
    <>
      <div className="profile-section">
        <div className="m-t">
          <h1>My Rocket</h1>
          <table className="local-table">
            {rData.map((r) => {
              return (
                r.status && (
                  <tr>
                    <td>{r.name}</td>
                  </tr>
                )
              );
            })}
          </table>
        </div>

        <div className="r-t">
          <h1>My Missions</h1>

          <table className="local-table">
            {mData.map((n) => {
              return (
                n.status && (
                  <tr>
                    <td>{n.mission_name}</td>
                  </tr>
                )
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
