import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [time, setTime] = useState()
    function increment() {
        setCount(count + 1)
        console.log(count)
    }
    function decrement() {
        setCount(count - 1)
        console.log(count)
    }
    function setNameChange(event) {
        setName(event.target.value)
        console.log(event.target.value)
    }
   
    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

            <h1>hello{name}</h1>
            <input type="text" value={name} onChange={setNameChange} />

            
        </>
    )
}
