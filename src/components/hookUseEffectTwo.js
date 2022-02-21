import React, { useState, useEffect } from "react";

function HookUseEffectTwo() {
  const [xcord, setXcord] = useState(0);
  const [ycord, setyCord] = useState(0);

  const logMouseMovement = (e) => {
    setXcord(e.clientX);
    setyCord(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect call");
    window.addEventListener("mousemove", logMouseMovement);
  }, []);
  return (
    <div>
      <h1>{`X Cordinate- ${xcord} and Y cordinate is ${ycord}`}</h1>
    </div>
  );
}

export default HookUseEffectTwo;
