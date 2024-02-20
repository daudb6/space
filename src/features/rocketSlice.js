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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(rocketFetch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(rocketFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rocket = [...action.payload];
    });
  },
});

export default rocketSlice.reducer;
