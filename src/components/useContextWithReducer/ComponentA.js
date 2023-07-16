import React, { useContext } from "react";
import { Context } from "../../App";

export default function ComponentA() {
  const CountContext = useContext(Context);
  return (
    <div>
      ComponentA :
      <button onClick={() => CountContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => CountContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}
