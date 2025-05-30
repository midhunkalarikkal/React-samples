import React, { useState } from "react";

// Child component
const Child = ({ sendDataToParent }) => {
  const [childData, setChildData] = useState("");

  const handleInputChange = (e) => {
    setChildData(e.target.value);
  };

  const handleButtonClick = () => {
    sendDataToParent(childData); // Send data to parent
    setChildData(""); // Clear input after sending data
  };

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Child Component</h2>
      <input
        type="text"
        value={childData}
        onChange={handleInputChange}
        placeholder="Enter data here"
        className="p-3 w-full mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleButtonClick}
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Send to Parent
      </button>
    </div>
  );
};

const StateLifting = () => {
  const [receivedData, setReceivedData] = useState("");

  // Function to receive data from child
  const receiveDataFromChild = (data) => {
    setReceivedData(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center mb-8">Parent Component</h1>

        <div className="mb-6">
          <h2 className="text-xl font-medium mb-2">Received Data from Child:</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-700">{receivedData || "No data received yet."}</p>
          </div>
        </div>

        {/* Child component */}
        <Child sendDataToParent={receiveDataFromChild} />
      </div>
    </div>
  );
};

export default StateLifting;
