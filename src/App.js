import "./styles.css";
import { useState } from "react";

export default function App() {
  const [calc, setCacl] = useState("");
  const [result, setResult] = useState("");

  const digits = () => {
    const number = [];
    for (let i = 1; i < 10; i++) {
      number.push(
        <button onClick={() => updatecalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return number;
  };

  const ops = ["/", "*", "-", "+", "."];
  const updatecalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCacl(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCacl(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCacl(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        {/* for display Input/Results */}
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
          {/* for Operators */}
        </div>

        <div className="operator">
          <button onClick={() => updatecalc("/")}>/</button>
          <button onClick={() => updatecalc("*")}>*</button>
          <button onClick={() => updatecalc("-")}>-</button>
          <button onClick={() => updatecalc("+")}>+</button>
          <button onClick={deleteLast}>Del</button>
        </div>

        {/* for Digits */}
        <div className="digits">
          {digits()}
          <button onClick={() => updatecalc("0")}>0</button>
          <button onClick={() => updatecalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
