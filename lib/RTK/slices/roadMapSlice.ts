import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoadMap {
  topicPointer: number;
  subtopicPointer: number;
  pointPointer: number;
}

const initialState: RoadMap = {
  topicPointer: 0,
  subtopicPointer: 1,
  pointPointer: 1,
};

const counterSlice = createSlice({
  name: "RoadMap",
  initialState,
  reducers: {
    next: (state) => {

        console.log("next")

      state.topicPointer++;
    },

    

    /*
    setColor:(state,action:PayloadAction<string>)=>{
      state.color=action.payload

      setColor 
    } */
  },
});

export const { next } = counterSlice.actions;
export default counterSlice.reducer;
