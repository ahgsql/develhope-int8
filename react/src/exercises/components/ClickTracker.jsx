import React, { useState } from "react";

export default function ClickTracker() {
  const [lastBtn, setLastBtn] = useState("None");
  const handleClick = (event) => {
    setLastBtn(event.target.innerHTML);
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Last Clicked Button is : {lastBtn}</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleClick}>Button 1</button>
          <button onClick={handleClick}>Button 2</button>
          <button onClick={handleClick}>Button 3</button>
        </div>
      </div>
    </>
  );
}
