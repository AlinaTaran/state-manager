import React from "react";

export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <span className="count">{count}</span>
      <div className="buttons">
        <button className="decrement" onClick={onIncrement}>
          -
        </button>
        <button className="increment" onClick={onDecrement}>
          +
        </button>
      </div>
    </div>
  );
};
