import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "../src/features/rocketSlice";
import missionReducer from "../src/features/missionSlice"

const store = configureStore({
  reducer: {
    rocketReducer,
    missionReducer,
  },
});
export default store;
