import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

import { Counter } from "../Counter";
export const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Counter
      count={count}
      onDecrement={handleDecrement}
      onIncrement={handleIncrement}
    ></Counter>
  );
};
