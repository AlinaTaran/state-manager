import React from "react";
import { Counter } from "../Counter";
import { useCounterStore } from "./store";

export const ZustandCounter = () => {
  const { increment, decrement, count } = useCounterStore();

  return (
    <Counter
      count={count}
      onIncrement={increment}
      onDecrement={decrement}
    ></Counter>
  );
};
