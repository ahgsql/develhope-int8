import React, { useState, useCallback } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, [count]);
  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return [count, increment, decrement, reset];
};
export default useCounter;
