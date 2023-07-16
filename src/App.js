//import logo from './logo.svg';
//import Counter from './components/UseStatePractice.js/Counter'
//import Counter2 from "./components/UseStatePractice.js/Counter2";
//import Counter3 from "./components/UseStatePractice.js/Counter3";
//import HookStateArray from "./components/UseStatePractice.js/HookStateArray";
//import EffectExample1 from "./components/UseEffectPractice/EffectExample1";
//import EffectExample2 from "./components/UseEffectPractice/EffectExample2";
//import EffectExample3 from "./components/UseEffectPractice/EffectExample3";
//import MouseContainer from "./components/UseEffectPractice/MouseContainer";
//import FetchMultiplePosts from "./components/dataFetching/FetchMultiplePosts";
//import FetchSinglePost from "./components/dataFetching/FetchSinglePost";
//import MyCounter3 from "./components/useReducerPractice/MyCounter3";
/*import React, { useReducer } from "react";
import ComponentA from "./components/useContextWithReducer/ComponentA";
import ComponentX from "./components/useContextWithReducer/ComponentX";
import ComponentZ from "./components/useContextWithReducer/ComponentZ";


export const Context = React.createContext();

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
*/
import "./App.css";
//import UseStateDataFetch from "./components/useStateAndUseReducer/UseStateDataFetch";
//import UseReducerDataFetch from "./components/useStateAndUseReducer/UseReducerDataFetch";
//import MyMemoCounter from "./components/useMemoPractice/MyMemoCounter";
//import FocusInput from "./components/useRefPractice/FocusInput";
import Timer from "./components/useRefPractice/Timer";

function App() {
  // const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    //<Context.Provider value={{ countState: count, countDispatch: dispatch }}>
    <div className="App">
      {/*<Counter/>*/}
      {/*<Counter2 />*/}
      {/*<Counter3 />*/}
      {/*<HookStateArray />*/}
      {/*<EffectExample1 />*/}
      {/*<EffectExample2 />*/}
      {/*<EffectExample3 />*/}
      {/*<MouseContainer />*/}
      {/*<FetchMultiplePosts />*/}
      {/*<FetchSinglePost />*/}
      {/*<MyCounter3 />*/}
      {/* Count: {count}
        <ComponentA />
        <ComponentX />
        <ComponentZ />*/}
      {/*<UseStateDataFetch />*/}
      {/*<UseReducerDataFetch />*/}
      {/*<MyMemoCounter />*/}
      {/*<FocusInput />*/}
      <Timer />
    </div>
    // </Context.Provider>
  );
}

export default App;
