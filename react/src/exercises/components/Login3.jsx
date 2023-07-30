import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
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
        <br /> <label>Remember Me?</label>
        <input
          type="checkbox"
          onChange={() => setRemember(!remember)}
          checked={remember ? "checked" : ""}
        />
        <br />
        <button
          type="button"
          onClick={() => {
            onLogin({ username, password, remember });
          }}
          disabled={username.length < 1 || password.length < 1}
        >
          Login
        </button>
      </form>
    </div>
  );
}
