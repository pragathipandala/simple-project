import "./index.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(12);

  const increaseValue = () => {
    setCount(count+1);
  };

  const decreaseValue = () => {
    setCount(count-1);
  };
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center p-20 border border-y-cyan-300 bg-slate-900 text-white mt-32">
          <h3 className="mb-4 text-2xl font-semibold">Simple Counter</h3>
          <h1 className="mb-4 text-4xl">Count: <span className=" font-semibold text-amber-400"> {count}</span> </h1>
          <div>
            <button
              onClick={increaseValue}
              className="mr-2 px-4 py-2 bg-slate-50 mt-5 mx-2 text-black"
            >
              Increase
            </button>
            <button
              onClick={decreaseValue}
              className="px-4 py-2 bg-slate-50 mx-2 text-black mt-5"
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
