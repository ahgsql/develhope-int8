import Counter from "./components/Counter2";

function App() {
  return (
    <>
      <Counter initial={50} incrementBy={1} timeInSeconds={2} />
    </>
  );
}

export default App;
