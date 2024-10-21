import { useState , useMemo } from "react"

const UseMemoCounter = () => {

    const [ counterOne , setCounterOne ] = useState(0)
    const [ counterTwo , setCounterTwo ] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 20000000000){
            i++
        }
        return counterOne % 2 === 0
    },[counterOne])

    return(
        <div>
            <button onClick = {incrementCounterOne}>Counter : 1 {counterOne}</button>
            <span>{isEven ? "Even" : "Odd"}</span>
            <button onClick = {incrementCounterTwo}>Counter : 2 {counterTwo}</button>
        </div>
    )
}

export default UseMemoCounter;