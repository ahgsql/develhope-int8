import React, { useRef } from "react";

export default function UncontrolledLogin({ onLogin }) {
  let usernameRef = useRef();
  let passRef = useRef();
  const handleLogin = () => {
    onLogin({
      username: usernameRef.current.value,
      pass: passRef.current.value,
    });
  };

  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" ref={usernameRef} />
        <br />
        <label>Password</label>
        <input type="password" ref={passRef} />
        <br />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="reset">Reset Form</button>
      </form>
    </div>
  );
}
