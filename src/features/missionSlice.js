import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMission = createAsyncThunk("mission", async () => {
  const responce = await fetch("https://api.spacexdata.com/v3/missions");
  
const data = await responce.json()
let editData =data.map((c) => {
  return(
    {...c,status:false}   
  )
  
}) 
console.log(editData)
return editData;
});

const missionSlice = createSlice({
  name:"mission",
  initialState:{
    mission:[],
    isLoading:false,
  },
  reducers:{
    joinMission:(state,action) => {
      state.mission[action.payload].status = true
      

    },
    cancelMission: (state,action) => {
      state.mission[action.payload].status = false
    }
  },
extraReducers: (builder) => {
  builder.addCase(fetchMission.pending, (state,action) => {
state.isLoading = true;
  });
  builder.addCase(fetchMission.fulfilled, (state,action) => {
    state.isLoading = false;
    state.mission = [...action.payload]
    

  })
  builder.addCase(fetchMission.rejected,() => {
    console.log('me kuch nhi kr skta')
  })

}

})
export const {joinMission,cancelMission}= missionSlice.actions
export default missionSlice.reducer

