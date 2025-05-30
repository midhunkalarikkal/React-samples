import { useState , useMemo } from "react"

const UseMemoCounter = () => {
  console.log("rendering")
   
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");
  
    const doubledNumber = useMemo(() => {
      console.log("Doubling the number...");
      return number * 2;
    }, [number]);
  
    return (
      <div className="p-4">
        <h1>useMemo Simple Example</h1>
        
        <div className="mb-4">
          <label>Enter a number: </label>
          <input
            type="number"
            className="p-2 border rounded-md"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </div>
        
        <p>Doubled Number: {doubledNumber}</p>
        
        <div className="mt-4">
          <label>Type something: </label>
          <input
            type="text"
            className="p-2 border rounded-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <p>Text: {text}</p>
      </div>
    )
}

export default UseMemoCounter;