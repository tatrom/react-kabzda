import {useState} from "react";

export const Counter2 = () => {
    const[counter, setCounter] = useState(2)

    return <>
        {counter}
        <button onClick={() => setCounter(c => c + 1)}></button>
    </>
}