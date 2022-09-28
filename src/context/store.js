import { createContext, useContext, useMemo, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const value = useMemo(
    () => ({
      count,
      increment,
      decrement,
    }),
    [count]
  );

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export const useContextCounter = () => {
  return useContext(CounterContext);
};
