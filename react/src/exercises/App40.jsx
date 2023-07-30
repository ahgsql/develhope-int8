import CarDetails from "./components/CarDetails";
function App() {
  return (
    <>
      <CarDetails initial={{ model: "Ali", year: 2010, color: "#ff0000" }} />
    </>
  );
}

export default App;
