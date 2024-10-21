import { useCallback, useState } from "react";
import ChildMemo from "./Child";
const Parent = () => {
    const [ count , setCount ] = useState(0)
    console.log("parent rendered")
    const memoizedCall = useCallback(() => {
        
    },[])
    return(
        <div>
            <button onClick={()=> setCount( count + 1)}>Increment {count}</button>
            <ChildMemo handleClick={memoizedCall}/>
        </div>
    )
}

export default Parent;