import useGithubUser from "./components/hooks/useGithubUser";
function App() {
  const user = useGithubUser("ahgsql");
  return <>{user && user.name}</>;
}

export default App;
