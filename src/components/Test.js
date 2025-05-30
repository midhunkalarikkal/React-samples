import React, { useMemo, useState } from 'react'



const Test = () => {
    const [ num, setNum ] = useState(0);
    const [ text, setText ] = useState("");

    const double = useMemo(() => {
        return num * 2
    },[num])
    
  return (
    <div>
        <input type='number' value={num} onChange={(e) => setNum(Number(e.target.value))}/>
        <h1>Input Number  * 2 : {double}</h1>
        <br/>
        <hr/>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <h1>Input Text : {text}</h1>
    </div>
  )
}

export default Test