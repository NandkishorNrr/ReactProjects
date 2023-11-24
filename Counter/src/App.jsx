import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  let increase = () => {
  if (count < 20) 
    setCount(++count);
  else {
    
      alert("Can not be +");
  }
  };

  let decrease = () => {
    if (count > 0) setCount(--count);
    else alert("Can not be -");
  };

  return (
    <>
      <h1>Counter</h1>
      <h2 style={{ color: "grey" }}>{count}</h2>
      <button
        onClick={increase}
        style={{ backgroundColor: "green", color: "black" }}
      >
        +
      </button>
      &nbsp;&nbsp;
      <button
        onClick={decrease}
        style={{ backgroundColor: "orange", color: "black" }}
      >
        -
      </button>
    </>
  );
}

export default App;
