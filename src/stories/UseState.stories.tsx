import React, {useState} from "react";

export default {
    title: "useState demo"

}

function generateData() {
    console.log('generateData')
    return 4234242
}

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(generateData);
    const changer = (state: number) => {
        return state + 1;
    }
    return <>
        <button onClick={() => setCounter(state =>  state + 1)}>+</button>
        {counter}
    </>
}