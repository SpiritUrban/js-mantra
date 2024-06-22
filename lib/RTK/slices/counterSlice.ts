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
    decrement:(state)=> {
      state.value--
    },
    setColor:(state,action:PayloadAction<string>)=>{
      state.color=action.payload
    }


  },
});

export const { increment,decrement,setColor } = counterSlice.actions;
export default counterSlice.reducer;


