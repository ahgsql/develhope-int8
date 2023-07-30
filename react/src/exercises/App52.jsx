import useGithubUser from "./components/hooks/useGithubUser4";
function App() {
  const [user, isLoading, error, mutate] = useGithubUser("ahgsql");
  return (
    <>
      {isLoading ? "Loading" : user.name} <br />{" "}
      <button onClick={() => mutate()}>Refetch</button>
    </>
  );
}

export default App;
