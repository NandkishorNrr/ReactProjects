import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    if (count + step <= 20) {
      setCount(count + step);
    } else {
      setCount(20);
      alert("Maximum limit reached!");
    }
  };

  const decrease = () => {
    if (count - step >= 0) {
      setCount(count - step);
    } else {
      setCount(0);
      alert("Minimum limit reached!");
    }
  };

  const reset = () => {
    setCount(0);
  };

  const double = () => {
    if (count <= 10) {
      setCount(count * 2);
    } else {
      alert("Maximum limit for doubling reached!");
    }
  };

  const handleStepChange = (e) => {
    const newStep = parseInt(e.target.value);
    if (!isNaN(newStep) && newStep > 0) {
      setStep(newStep);
    }
  };

  return (
    <div className="container">
      <h1 className="counter">Counter</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <div className="button-group">
          <div>
            <button onClick={increase} className="btn btn-increase">
              +
            </button>
          </div>
          <br />
          <div>
            <button onClick={decrease} className="btn btn-decrease">
              -
            </button>
          </div>
        </div>

        <div className="button-group">
          <div>
            <button onClick={reset} className="btn btn-reset">
              Reset
            </button>
          </div>
          <br />
          <div>
            <button onClick={double} className="btn btn-double">
              Double
            </button>
          </div>
        </div>
      </div>
      <div className="step-input">
        <label htmlFor="step">
          <h3>Step:</h3>
        </label>

        <input
          type="number"
          id="step"
          value={step}
          onChange={handleStepChange}
        />
      </div>
    </div>
  );
}

export default App;
