import React, { useState, useRef } from "react";

export default function Todolist() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  let itemRef = useRef();
  const handleAdd = () => {
    if (newItem.length < 1) return;
    setItems((prev) => {
      return [...prev, newItem];
    });
    setNewItem("");
    itemRef.current.focus();
  };

  const handleClear = () => {
    setItems((prev) => {
      return [];
    });
    setNewItem("");
    itemRef.current.focus();
  };

  return (
    <>
      <div>Todolist</div>

      <br />
      <input
        type="text"
        value={newItem}
        ref={itemRef}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear List</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
