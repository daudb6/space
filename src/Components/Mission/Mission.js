import React, { useEffect } from "react";
import { fetchMission } from "../../features/missionSlice";
import "./Mission.css";
import { joinMission ,cancelMission} from "../../features/missionSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Mission = () => {
  const dispatch = useDispatch()
  const missionData = useSelector((state) =>state.missionReducer.mission )
  useEffect(() => {
    if (missionData.length === 0)
        dispatch(fetchMission());
}, [dispatch, missionData.length]);


  

  const isLoading = useSelector((state) =>state.missionReducer.isLoading )
  return (
    <>
   {isLoading ? <h1>Loading...</h1>:(

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
  {missionData.map((d,i) => {
    return (
      <tbody>
        <tr>
          <td>{d.mission_name}</td>
          <td className="justi">{d.description}</td>
          <td>
            {d.status ? <p> Member</p> :
            <p>Not a Member</p>
            }
            
          </td>
          <td>
            {d.status ? <button onClick={() => dispatch(cancelMission(i))}>Cancel Mission</button> : <button onClick={() => dispatch(joinMission(i))}>Join Mission</button> }
            
          </td>
        </tr>
      </tbody>
    );
  })}
</table>
</div>

   )}         
        </>      
  );
};

