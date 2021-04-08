import {useState} from "react";

export const Counter6 = () => {
    const[counter, setCounter] = useState(6)

    return <>
        {counter}
        <button onClick={() => setCounter(c => c + 1)}></button>
    </>
}