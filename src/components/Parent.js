import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [childData, setChildData] = useState("");  

  const handleChildData = (data) => {
    setChildData(data);  
  };

  return (
    <div className="w-6/12 p-2 bg-orange-100">
      <h1>Data from Child component</h1>
      <h1>{childData}</h1>  
      <Child onSendData={handleChildData} />
    </div>
  );
};

export default Parent;
