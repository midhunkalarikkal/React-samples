import {useState} from 'react'

export const Counter = () => {
    let [countNum, setCountNum] = useState(0)
    return (
        <div className="counter-container">
            <span className="counter">{countNum}</span>
            <div className="counter-buttons">
                <button onClick={ () => setCountNum(num => num + 1) }>Increment</button>
                <button onClick={ () => setCountNum(num => num - 1) }>decrement</button>
            </div>
        </div>
    )
}
