import { useAtom } from "jotai";
import React from "react";

import { Counter } from "../Counter";
import { countAtom } from "./store";
export const JotaiCounter = () => {
  const [count, setCount] = useAtom(countAtom);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <Counter
      count={count}
      onDecrement={handleDecrement}
      onIncrement={handleIncrement}
    ></Counter>
  );
};
