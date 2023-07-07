import Login from "./components/Login";

function App() {
  const loginOnSubmit = (data) => {
    console.log("On Login Called. Data Was: ", data);
  };
  return (
    <>
      <Login onLogin={loginOnSubmit} />
    </>
  );
}

export default App;
