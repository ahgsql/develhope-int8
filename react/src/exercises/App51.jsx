import useGithubUser from "./components/hooks/useGithubUser4";
function App() {
  const [user, isLoading] = useGithubUser();
  return <>{isLoading ? "Loading" : user ? user.name : "Null"}</>;
}

export default App;
