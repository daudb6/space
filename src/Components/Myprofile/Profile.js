import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";

const Profile = () => {
  const mData = useSelector((state) => state.missionReducer.mission);
  console.log(mData)
  return (
    <>
      <div className="profile-section">
        <div className="m-t">
          <h1>My Rocket</h1>
          <table className="local-table">
            <tr>
              <td>Falcon1</td>
              <td>Falcon1</td>
            </tr>
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
