import React, { useState } from "react";

export default function Todolist() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const handleAdd = () => {
    if (newItem.length < 1) return;
    setItems((prev) => {
      return [...prev, newItem];
    });
  };

  return (
    <>
      <div>Todolist</div>

      <br />
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
