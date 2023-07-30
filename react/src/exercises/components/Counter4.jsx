import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const inter = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(inter);
  });
  return <h1>{count}</h1>;
}
