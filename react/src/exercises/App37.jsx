import useControlledForm from "./components/hooks/useControlledForm";
function App() {
  const [username, handleUsername] = useControlledForm("");
  const [password, handlePassword] = useControlledForm("");
  return (
    <>
      <label htmlFor="">Username:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleUsername}
      />
      <br />
      <label htmlFor="">Password:</label>

      <input
        type="text"
        name="password"
        value={password}
        onChange={handlePassword}
      />
    </>
  );
}

export default App;
