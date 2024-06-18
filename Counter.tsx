"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { increment, decrement, incrementByAmount,makeRed } from '@/lib/redux/slices/counterReducer';


const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const color = useAppSelector((state) => state.counter.color);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div style={{background:color}}>
        <button onClick={()=>dispatch(makeRed())}>makeRed</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  );
};

export default Counter;
