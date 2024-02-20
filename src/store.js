import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "../src/features/rocketSlice";

const store = configureStore({
  reducer: {
    rocketReducer,
  },
});
export default store;
