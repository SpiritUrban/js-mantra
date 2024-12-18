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
    set3: (state, action: PayloadAction<number>) => {
      state.pointPointer = action.payload;
    },
    set2: (state, action: PayloadAction<number>) => {
      state.subtopicPointer = action.payload;
    },
  },
});

export const { next, next2, set2, next3, set3 } = counterSlice.actions;
export default counterSlice.reducer;
