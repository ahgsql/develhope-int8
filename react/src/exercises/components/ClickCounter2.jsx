import React, { useState, useEffect } from "react";

export default function ClickCounter2({ onCounterChange }) {
  const [count, setCount] = useState(0);
  useEffect(() => onCounterChange, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click To Increment
      </button>
    </>
  );
}
