import React, { useEffect } from "react";
import "./Rocket.css";
import { rocketFetch } from "../../features/rocketSlice";
import { reservRocket,cancelReserve } from "../../features/rocketSlice";
import { useSelector, useDispatch } from "react-redux";

export const Rocket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rocketFetch());
  }, []);

  const rocketData = useSelector((state) => state.rocketReducer.rocket);
  console.log(rocketData);
  const isLoading = useSelector((state) => state.rocketReducer.isLoading);

  return (
    <>
      {isLoading ? (
        <h1>Loading......</h1>
      ) : (
        <>
          {!rocketData ? (
            <p>Loading....</p>
          ) : (
            <>
              {rocketData.map((rocket) => (
                <div className="rocket" key={rocket.id}>
                  <div className="rocket-img">
                    <img src={rocket.flickr_images[1]} alt={rocket.name} />
                  </div>
                  <div className="details">
                    <div className="heading">
                      <h3>{rocket.name}</h3>
                      <p>{rocket.description}</p>
                    </div>
                    <div className="btn">
                      <button type="button">Reserve Rocket</button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};
