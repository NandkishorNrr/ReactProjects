import React, { useCallback, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { FiRepeat } from "react-icons/fi";

import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertAmount, setConvertAmount] = useState(0);

  const fromCurrencyInfo = useCurrencyInfo(fromCurrency);
  const toCurrencyInfo = useCurrencyInfo(toCurrency);

  const fromCurrencyOptions = Object.keys(fromCurrencyInfo);
  const toCurrencyOptions = Object.keys(toCurrencyInfo);

  const [rotatedAngle, setRotatedAngle] = useState(90);
  const swapCurrencies = () => {
    // Swapping currencies
    const tempC = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempC);

    const tempA = amount;
    setAmount(convertAmount);
    setConvertAmount(tempA);

    setRotatedAngle(rotatedAngle === 90 ? 0 : 90);
  };

  const convert = () => {
    setConvertAmount(amount * fromCurrencyInfo[toCurrency]);
  };

  return (
    <div className="bg-container">
      <div className="content bg-grey-300">
        <form>
          <div className="mb-1">
            <InputBox
              className="bg-orange-500 font-black text-orange-900"
              label="From"
              amount={amount}
              currencyOptions={fromCurrencyOptions}
              onCurrencyChange={(currency) => {
                setFromCurrency(currency);
                convert();
              }}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={fromCurrency}
            />
          </div>
          <div className="relative h-0.5 mb-4">
            <button
              type="button"
              className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2  border-white rounded-full bg-blue-800 text-white w-16 h-16 flex justify-center items-center myBtn rotate-${rotatedAngle}`}
              onClick={swapCurrencies}
            >
              <FiRepeat size={24} /> {/* Render the icon */}
            </button>
          </div>

          <div className="mt-1">
            <InputBox
              className="bg-green-500 font-black text-green-900"
              label="To"
              amount={convertAmount}
              currencyOptions={toCurrencyOptions}
              onCurrencyChange={(currency) => {
                setToCurrency(currency);
                convert();
              }}
              selectedCurrency={toCurrency}
              amountDisable
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-800 text-white px-4 py-3 rounded-lg mt-4 myBtn"
            onClick={convert}
          >
            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
