import {useState} from "react";

export const Counter4 = () => {
    const[counter, setCounter] = useState(4)

    return <>
        {counter}
        <button onClick={() => setCounter(c => c + 1)}></button>
    </>
}