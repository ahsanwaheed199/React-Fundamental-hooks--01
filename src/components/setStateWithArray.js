import React, { useState } from "react";

function SetStateWithArray() {
  const [items, setitems] = useState([]);

  const addItem = () => {
    setitems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Click to add items</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}> {item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default SetStateWithArray;
