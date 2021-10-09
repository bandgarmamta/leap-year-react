import "./styles.css";
import { useState } from "react";
import React from "react";

export default function App() {
  var [year, setYear] = useState(" ");
  const [result, setResult] = useState("");
  year = Number(year);
  function isLeapYear() {
    if (year < 0 || year === 0) {
      return setResult("Please enter a valid number");
    } else {
      if (year % 400 === 0) {
        return setResult("yes! it is a leap year");
      }
      if (year % 100 === 0) {
        return setResult("No! it's not a leap year");
      }
      if (year % 4 === 0) {
        return setResult("yes! it is a leap year");
      } else {
        return setResult("No! it's not a leap year");
      }
    }
  }
  return (
    <div className="App">
      <h1>LEAP YEAR</h1>
      <input
        id="inputYear"
        onChange={(e) => setYear(e.target.value)}
        placeholder="enter year"
        type="number"
      />
      <button onClick={() => isLeapYear()}>Check</button>
      <div id="output">{result}</div>
    </div>
  );
}
