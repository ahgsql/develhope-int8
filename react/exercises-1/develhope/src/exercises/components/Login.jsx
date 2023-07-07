import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
        <br />

        <button
          type="button"
          onClick={() => {
            onLogin({ username, password });
          }}
          disabled={username.length < 1 || password.length < 1}
        >
          Login
        </button>
      </form>
    </div>
  );
}
