import {useState} from "react";

export const Counter8 = () => {
    const[counter, setCounter] = useState(8)

    return <>
        {counter}
        <button onClick={() => setCounter(c => c + 1)}></button>
    </>
}