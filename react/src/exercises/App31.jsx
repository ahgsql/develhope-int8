import Login3 from "./components/Login3";

function App() {
  const loginOnSubmit = (data) => {
    console.log("On Login Called. Data Was: ", data);
  };
  return (
    <>
      <Login3 onLogin={loginOnSubmit} />
    </>
  );
}

export default App;
