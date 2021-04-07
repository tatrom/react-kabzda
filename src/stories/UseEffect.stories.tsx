import axios from "axios";
import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo"

}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString();
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'User';
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString();
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'User';
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString();
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'User';
    }, [counter])
    return <>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeOutExample");

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setCounter((state) => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        Hello,counter:{counter} fake:{fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered with " + counter);

    useEffect(() => {
        console.log("Effect occurred" + counter)
        return () => {
            console.log("Reset effect" + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }
    return <>
        Hello, counter {counter}
        <button onClick={increase}>increase</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log("Component rendered with " + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)

        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeOutExample = () => {
    const [text, setText] = useState('')
    console.log("Component rendered with " + text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId);
            console.log('Clear timeout')
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}

export const ResponseToServerExample = () => {
    console.log('my setTimeOutExample')
    let users;
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => response.data)
            .then((data) => users = data)
    })

    return <>
        {users}
    </>
}