import useCounter from "./components/hooks/useCounter2";
function App() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
