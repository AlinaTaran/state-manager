import React from "react";

import { Counter } from "../Counter";
import { useContextCounter } from "./store";

export const ContextCounter = () => {
  const { count, increment, decrement } = useContextCounter();

  return (
    <Counter
      count={count}
      onDecrement={decrement}
      onIncrement={increment}
    ></Counter>
  );
};
