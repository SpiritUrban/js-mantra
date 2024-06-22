"use client";

import { useSelector, useDispatch } from "react-redux";
import { increment,decrement ,setColor} from "@/lib/RTK/slices/counterSlice";
import { RootState } from "@/lib/RTK/store";
import React from "react";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const counterColor = useSelector((state:RootState)=>state.counter.color);

  return (
    <div style={{backgroundColor:counterColor}}>
      <h1>Counter: {counterValue}</h1>

      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus </button>
      <button onClick={() => dispatch(setColor('green'))}>Make Green Color </button>
      <button onClick={() => dispatch(setColor('white'))}>Make white Color </button>
      <button onClick={() => dispatch(setColor('brown'))}>Make brown Color </button>
    </div>
  );
};
