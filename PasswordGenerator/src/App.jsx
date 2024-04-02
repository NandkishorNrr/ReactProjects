import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [cpyTxt, setCpyTxt] = useState("Copy");
  const [cpyBtnStyl, setCpyBtnStyl] = useState(
    "outline-none rounded text-white px-5  py-0.5 shrink-0 "
  );
  const [cpyBtlClr, setCpyBtlClr] = useState();

  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
    setCpyTxt("Copied");
    setCpyBtlClr("bg-green-700 px-1");
  }, [length, password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_-+={[}]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * (str.length + 1));
      pass += str.charAt(char);
    }
    setPassword(pass);
    setCpyTxt("Copy");
    setCpyBtlClr("bg-blue-600");
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-400 text-blue-700 text-2xl">
        <h1 className="text-blue-700 text-center my-3">Password Generator</h1>
        <div>
          <div className="flex flex-col md:flex-row shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full md:w-64 py-2 px-4 bg-white rounded-tl-md md:rounded-l-md md:rounded-bl-none mb-2 md:mb-0"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className={`${cpyBtnStyl} ${cpyBtlClr} w-24`}
            >
              {cpyTxt}
            </button>
          </div>
          <div className="flex flex-col md:flex-row text-sm gap-x-2">
            <div className="flex items-center gap-x-1 mb-2 md:mb-0">
              <input
                type="range"
                id="length"
                min={5}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="w-full md:w-32"
              />
              <label htmlFor="length">Length {length}</label>
            </div>
            <div className="flex items-center gap-x-1 mb-2 md:mb-0">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
                className="mr-1"
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                id="characterInput"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
                className="mr-1"
              />
              <label htmlFor="characterInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
