import React, { useEffect } from "react";
import "./Rocket.css";
import { rocketFetch } from "../../features/rocketSlice";
import { reservRocket,cancelReserve } from "../../features/rocketSlice";
import { useSelector, useDispatch } from "react-redux";

export const Rocket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rocketFetch());
  }, [dispatch]);

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
              {rocketData.map((rocket, i) => (
                <div className="rocket" key={rocket.id}>
                  <div className="rocket-img">
                    <img src={rocket.flickr_images[1]} alt={rocket.name} />
                  </div>
                  <div className="details">
                    <div className="heading">
                      <h3>{rocket.name}</h3>
                      {rocket.status && (
                        <span className="reserved">Reserved</span>
                      )}
                      <p>{rocket.description}</p>
                    </div>
                    <div className="btn">
                      {rocket.status ? (
                        <button onClick={() => dispatch(cancelReserve(i))}>
                          Cancel Reservation
                        </button>
                      ) : (
                        <button onClick={() => dispatch(reservRocket(i))}>
                          Reserve Rocket
                        </button>
                      )}
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
