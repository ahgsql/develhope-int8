import { useState } from "react";
import FilteredList from "./components/FilteredList";

function App() {
  const initialList = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alice", age: 20 },
    { id: 3, name: "Bob", age: 17 },
    { id: 4, name: "Jane", age: 30 },
  ];
  const [list, setList] = useState(initialList);
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>FilteredList Component </h1>
      <FilteredList list={list} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

export default App;
