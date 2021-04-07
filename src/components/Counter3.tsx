import {useState} from "react";

export const Counter3 = () => {
    const[counter, setCounter] = useState(3)

    return <>
        {counter}
        <button onClick={() => setCounter(c => c + 1)}></button>
    </>
}