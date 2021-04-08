import {useState} from "react";

export const Counter7 = () => {
    const[counter, setCounter] = useState(7)

    return <>
        {counter}
        <button onClick={() => setCounter(c => c + 1)}></button>
    </>
}