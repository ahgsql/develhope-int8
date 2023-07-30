import GithubUserList from "./components/GithubUserList";
import { useState, useRef } from "react";
function App() {
  const [users, setUsers] = useState(["ahgsql"]);
  let usernameRef = useRef();
  const handleAddUser = () => {
    setUsers([...users, usernameRef.current.value]);
    usernameRef.current.value = "";
  };
  return (
    <>
      <input type="text" ref={usernameRef} />{" "}
      <button type="button" onClick={handleAddUser}>
        Add To List
      </button>
      <GithubUserList users={users} />
    </>
  );
}

export default App;
