import React, { useState } from "react";
import Welcome from "./Welcome";

export default function InteractiveWelcome() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        value={name}
        onChange={({ target }) => {
          setName(target.value);
        }}
      />
      <Welcome name={name} />
    </div>
  );
}
