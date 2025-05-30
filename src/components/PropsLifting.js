import { useState } from "react";

// Child component
const Child = ({ updateMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    updateMessage(inputValue);
    setInputValue(""); // Clear the input after sending the message
  };

  return (
    <div className="mt-6 flex flex-col items-center space-y-4">
      <input
        type="text"
        className="p-3 w-80 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a message"
      />
      <button
        onClick={handleClick}
        className="w-80 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send to Parent
      </button>
    </div>
  );
};

const PropsLifting = () => {
  const [message, setMessage] = useState("");

  // Function passed down to child to update the state
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">Props Passing Example</h1>
      
      <h2 className="text-lg font-medium text-center text-gray-700 mb-4">
        Message:{" "}
        <span className="font-bold text-blue-500">{message || "No message yet"}</span>
      </h2>
      
      {/* Passing the updateMessage function to the child */}
      <Child updateMessage={updateMessage} />
    </div>
  );
};

export default PropsLifting;
