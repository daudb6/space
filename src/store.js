import { ConfigureStore } from "@reduxjs/toolkit";
import rocketReducer from "../src/features/rocketSlice";

const store = ConfigureStore({
  reducer: {
    rocketReducer,
  },
});
export default store;
