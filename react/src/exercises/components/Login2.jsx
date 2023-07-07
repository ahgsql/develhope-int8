import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleReset = () => {
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <form>
        <label>Username</label> <br />
        <input
          type="text"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
        <br /> <br />
        <button
          type="button"
          onClick={() => {
            onLogin({ username, password });
          }}
          disabled={username.length < 1 || password.length < 1}
        >
          Login
        </button>{" "}
        &nbsp;
        <button type="reset" onClick={handleReset}>
          Reset Form
        </button>
      </form>
    </div>
  );
}
