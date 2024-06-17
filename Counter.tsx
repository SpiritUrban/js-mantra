"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { increment, decrement, incrementByAmount } from '@/lib/redux/slices/counterReducer';


const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
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
