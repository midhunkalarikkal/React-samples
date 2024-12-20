import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";

export const Counter = () => {
  let [countNum, setCountNum] = useState(0);
  return (
    <div className="counter-container flex flex-wrap w-full p-2">
      <div className="counterOne w-3/12 bg-gray-200 p-4 m-1 rounded-xl shadow">
      <div>
        <h1 className="text-md font-bold text-black">Normal counter</h1>
      </div>
        <div>
          <h1 className="text-center text-5xl font-semibold">{countNum}</h1>
        </div>
        <div className="counter-buttons mt-4 flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
            onClick={() => setCountNum((num) => num + 1)}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400"
            onClick={() => setCountNum((num) => num - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
