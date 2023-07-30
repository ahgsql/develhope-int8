import useGithubUser from "./components/hooks/useGithubUser3";
function App() {
  const [user, isLoading] = useGithubUser("ahgsql");
  return <>{isLoading ? "Loading" : user && user.name}</>;
}

export default App;
