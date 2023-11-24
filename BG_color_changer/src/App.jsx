import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}>
        <div className="m-3 gap-2 fixed flex flex-wrap bg-white rounded-3xl p-2 justify-center">
          <button className="bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "red" }}
          onClick={()=>setColor("red")}
          >Red</button>
          <button className="bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "green" }}
          onClick={()=>setColor("green")}
          >Green</button>
          <button className="bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "blue" }}
          onClick={()=>setColor("blue")}
          >Blue</button>
          <button className="bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "yellow" }}
          onClick={()=>setColor("yellow")}
          >Yellow</button>
          <button className="bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "grey" }}
          onClick={()=>setColor("grey")}
          >Grey</button>
        </div>
    </div>
  );
}

export default App;
