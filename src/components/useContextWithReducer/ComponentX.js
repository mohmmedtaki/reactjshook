import React, { useContext } from "react";
import { Context } from "../../App";

export default function ComponentX() {
  const CountContext = useContext(Context);
  return (
    <div>
      ComponentX :
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
