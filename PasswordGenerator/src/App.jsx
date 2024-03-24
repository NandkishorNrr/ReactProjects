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
    "outline-none  text-white px-3 py-0.5 shrink-0 "
  );
  const [cpyBtlClr, setCpyBtlClr] = useState();

  const passwordRef = useRef(null);
  const copyPasswordToClipBoare = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
    setCpyTxt("Copied");
    setCpyBtlClr("bg-green-700");
  }, [password]);

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
  // console.log(`Pass: {password}`);

  return (
    <>
      <div
        className="w-full max-w-xl mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 bg-gray-400 text-blue-700 text-2xl"
      >
        <h1 className="text-blue-700 text-center my-3">Password Generator</h1>
        <div>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipBoare}
              className={cpyBtnStyl + cpyBtlClr}
            >
              {cpyTxt}
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex item-center  gap-x-1">
              <input
                type="range"
                id="length"
                min={5}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="length">Length {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
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
              />
              <label htmlFor="numberInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
