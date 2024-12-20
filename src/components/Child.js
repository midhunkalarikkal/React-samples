import React from "react";

const Child = ({ onSendData }) => {
  const data = "Midhun"; 

  const setData = () => {
    if (typeof onSendData === 'function') {  
      onSendData(data);  
    } else {
      console.error("onSendData is not a function");
    }
  };

  return (
    <div className="w-6/12 bg-red-200 p-2">
      <h1>Child component</h1>
      <div className="p-2">
      <input type="text" className="mx-2 py-1"/>
      <button className="px-2 py-1 text-md font-bold bg-green-300" onClick={setData}>
        Send data
      </button>
      </div>
    </div>
  );
};

export default Child;
