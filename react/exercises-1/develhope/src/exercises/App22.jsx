import UncontrolledLogin from "./components/UncontrolledLogin2";

function App() {
  const loginOnSubmit = (data) => {
    console.log("On Login Called. Data Was: ", data);
  };
  return (
    <>
      <UncontrolledLogin onLogin={loginOnSubmit} />
    </>
  );
}

export default App;
