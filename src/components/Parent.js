import { useState } from "react";
import ChildMemo from "./Child";
const Parent = () => {
    const [ count , setCount ] = useState(0)
    console.log("parent rendered")
    return(
        <div>
            <button onClick={()=> setCount( count + 1)}>Increment {count}</button>
            <ChildMemo />
        </div>
    )
}

export default Parent;