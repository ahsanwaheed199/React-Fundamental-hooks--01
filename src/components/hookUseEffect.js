// The use effect hook lets you perform  side effect in functional component
// Its a close replacement of componeentDidMount,componentDidUpdate and  componentWillUnmount

// useEffect runs after every render (by default), and can optionally clean up for itself before it runs again.
// useEffect is places inside the componenet
import React, { useState, useEffect } from "react";

function HookUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating  useEffect");
    document.title = `You Clicked ${count} times`;
  }, [count]); // second argument of useEffect is an array we need to specify either props or state it wathced for
  //and only if those props and state is changed then the effect is run

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click for increment Count
      </button>
      <h1> {count} </h1>
    </div>
  );
}

export default HookUseEffect;
