import React, { useState, useCallback } from "react";

// Child component
const Child = React.memo(({ onButtonClick }) => {
  console.log("Rendering Child Component");
  return (
    <button
      onClick={onButtonClick}
      className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-400"
    >
      Click Me
    </button>
  );
});


const UseCallback = () => {
  console.log("Rendering Parent Component");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoize the function to prevent re-creation on every render
  const handleButtonClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        useCallback Example with Parent and Child
      </h1>

      {/* Child Component with Button */}
      <div className="mb-6 text-center">
        <h5 className="text-blue-500">Child compoenent</h5>
        <Child onButtonClick={handleButtonClick} />
      </div>

      {/* Count display */}
      <div className="mb-4">
        <p className="text-xl font-medium text-gray-700">
          Count: <span className="text-lg font-bold text-blue-500">{count}</span>
        </p>
      </div>

      {/* Text input */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Type something:
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <p className="text-lg font-medium text-gray-700">
        Text: <span className="text-lg font-bold text-blue-500">{text}</span>
      </p>
    </div>
  );
};

export default UseCallback;
