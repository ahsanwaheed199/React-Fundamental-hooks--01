// useState hook returns an array with two elements
// When dealing with object and array, alway make sure to spread your state variable and then call to the setter function

import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>
        Increment Count{" "}
      </button>
      <button onClick={() => setCount((pre) => pre - 1)}>
        Decrement Count{" "}
      </button>
      <button onClick={() => setCount((pre) => pre + 5)}>
        Increment Five{" "}
      </button>
      <button onClick={() => setCount(0)}>Clear </button>
    </div>
  );
}

export default UseState;
