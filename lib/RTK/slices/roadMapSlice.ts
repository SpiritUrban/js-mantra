import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoadMap {
  topicPointer: number;
  subtopicPointer: number;
  pointPointer: number;
}

const initialState: RoadMap = {
  topicPointer: 0,
  subtopicPointer: 0,
  pointPointer: 0,
};

const counterSlice = createSlice({
  name: "RoadMap",
  initialState,
  reducers: {
    next: (state) => {
      state.topicPointer++;
    },
    next2: (state) => {
      state.subtopicPointer++;
    },
    next3: (state) => {
      state.pointPointer++;
    },

    /*
    setColor:(state,action:PayloadAction<string>)=>{
      state.color=action.payload

      setColor 
    } */
  },
});

export const { next, next2, next3 } = counterSlice.actions;
export default counterSlice.reducer;
