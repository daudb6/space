import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const rocketFetch = createAsyncThunk("rocket", async () => {
  const response = await fetch("https://api.spacexdata.com/v4/rockets");
  const data = await response.json();
  return data;
});
const rocketSlice = createSlice({
  name: "Rocket",
  initialState: {
    rocket: [],
    isLoading: false,
  },
  reducers: {
    reservRocket:(state,action) => {
      state.mission[action.payload].status = true

    },
    cancelReserve: (state,action) => {
      state.mission[action.payload].status = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(rocketFetch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(rocketFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rocket = [...action.payload];
      console.log(action.payload)
    });
  },
});
export const{reservRocket,cancelReserve} = rocketSlice.actions
export default rocketSlice.reducer;



