import React, { useEffect, useState } from "react";

function HookUseEffectThree() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
      //   setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  //   }, [count]); // dependecy for re rendring

  return <div>{count}</div>;
}

export default HookUseEffectThree;
