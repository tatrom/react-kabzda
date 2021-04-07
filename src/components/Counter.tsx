import {useState} from "react";

export const Counter = () => {
    const[counter, setCounter] = useState(0)

    return <>
        {counter}
        <button onClick={() => setCounter(c => c + 1)}></button>
    </>
}