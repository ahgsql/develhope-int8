import useGithubUser from "./components/hooks/useGithubUser2";
function App() {
  const [user, loading, error] = useGithubUser("ahgsql");
  console.log(user, loading, error);
  return (
    <>
      {loading ? "Loading" : user.name}
      {error && <span>{error.message}</span>}
    </>
  );
}

export default App;
