import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Counter {
  value: number;
  color: string;
}

const initialState: Counter = {
  value: 0,
  color: "pink",
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
        state.value++
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;

