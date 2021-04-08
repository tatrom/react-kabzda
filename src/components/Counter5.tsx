import {useState} from "react";

export const Counter5 = () => {
    const[counter, setCounter] = useState(5)

    return <>
        {counter}
        <button onClick={() => setCounter(c => c + 1)}></button>
    </>
}