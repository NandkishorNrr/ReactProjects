import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div
      className="w-full h-screen flex ... duration-200 flex flex-wrap justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="m-3 gap-2 fixed flex flex-wrap justify-center bottom-1 px-2 bg-white rounded-3xl p-1 flex flex-wrap justify-center">
        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "grey" }}
          onClick={() => setColor("grey")}
        >
          Grey
        </button>

        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "Navy", color: "white" }}
          onClick={() => setColor("Navy")}
        >
          Navy
        </button>
        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center "
          style={{ border: "0.02px solid black" }}
          onClick={() => setColor("White")}
        >
          White
        </button>
        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "Coral" }}
          onClick={() => setColor("Coral")}
        >
          Coral
        </button>
        <button
          className="flex-auto bg-red rounded-2xl p-2 justify-center"
          style={{ backgroundColor: "Indigo" }}
          onClick={() => setColor("Indigo")}
        >
          Indigo
        </button>
      </div>
    </div>
  );
}

export default App;
