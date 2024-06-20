import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [result, setresult] = useState("");
  const handler = (e) => {
    setresult((prev) => prev.concat(e.target.id));
  };
  const clearAll = () => {
    setresult("");
  };
  const deleteNum = () => {
    setresult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setresult(eval(result).toString());
    } catch (error) {
      setresult("error");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-blue-400 bg-center bg-no-repeat bg-cover bg-hero">
      <div className="flex flex-col items-center justify-center border-2 border-gray-500 rounded-md shadow-lg shadow-gray-500 lg:w-96 lg:h-100 lg:gap-y-5 md:gap-y-4 sm:gap-y-3 phone:gap-y-5 md:w-64 md:h-98 sm:h-96 sm:w-60 phone:h-85 phone:w-52">
        <h1 className="font-serif font-bold text-center lg:text-4xl md:text-3xl sm:text-xl">
          Calculator
        </h1>
        <input
          className="w-5/6 p-4 text-black bg-gray-300 border border-gray-500 rounded-sm shadow-inner lg:text-2xl md:text-xl sm:text-sm lg:h-16 md:h-13 sm:h-10 phone:h-6 text-end opacity-90 shadow-gray-500"
          value={result} placeholder="Enter here"
          type="text"
          disabled
        ></input>
        <div className="flex flex-wrap items-center justify-center lg:gap-4 md:gap-1 lg:gap-x-7 sm:gap-x-4 phone:gap-x-3 md:gap-x-5 lg:h-96 lg:w-80 md:w-60 md:h-72 sm:h-64 sm:w-48 phone:h-52 phone:w-44">
          <button onClick={clearAll} className=" operator">
            AC
          </button>
          <button onClick={deleteNum} className="operator">
            DEL
          </button>
          <button onClick={handler} className="operator" id=".">
            .
          </button>
          <button onClick={handler} className="operator" id="/">
            /
          </button>
          <button type="button" className="operators" onClick={handler} id="7">
            7
          </button>
          <button className="operators" onClick={handler} id="8">
            8
          </button>
          <button className="operators" onClick={handler} id="9">
            9
          </button>
          <button className="operator" onClick={handler} id="*">
            *
          </button>
          <button className="operators" onClick={handler} id="4">
            4
          </button>
          <button className="operators" onClick={handler} id="5">
            5
          </button>
          <button className="operators" onClick={handler} id="6">
            6
          </button>
          <button className="operator" onClick={handler} id="-">
            -
          </button>
          <button className="operators" onClick={handler} id="1">
            1
          </button>
          <button className="operators" onClick={handler} id="2">
            2
          </button>
          <button className="operators" onClick={handler} id="3">
            3
          </button>
          <button className="operator" onClick={handler} id="+">
            +
          </button>
          <button className="operators" onClick={handler} id="00">
            00
          </button>
          <button className="operators" onClick={handler} id="0">
            0
          </button>
          <button onClick={calculate} className="operator lg:w-28 lg:h-14 md:w-16 md:h-10 sm:w-14 sm:h-9 phone:w-12 phone:h-8">
            =
          </button>
        </div>
        {/* <div className="flex flex-wrap items-center justify-center gap-4 mt-5 border border-black gap-x-7 h-14 w-80"></div> */}
      </div>
    </div>
  );
}

export default App;
