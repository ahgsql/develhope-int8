import ClickCounter2 from "./components/ClickCounter2";

function App() {
  const onCounterChange = () => {
    console.log("Counter changed!");
  };

  return (
    <>
      <ClickCounter2 onCounterChange={onCounterChange} />
    </>
  );
}

export default App;
