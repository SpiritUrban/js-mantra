// slices.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  color:string;
}

const initialState: CounterState = {
  value: 0,
  color:"green",
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    makeRed:(state)=> {
      state.color = "red"
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount,makeRed } = counterSlice.actions;

export default counterSlice.reducer;
