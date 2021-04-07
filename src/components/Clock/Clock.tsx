import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock = (props: PropsType) => {
    let time = new Date();

    let [hours, setHours] = useState(time.getHours())
    let [minutes, setMinutes] = useState(time.getMinutes())
    let [seconds, setSeconds] = useState(time.getSeconds())

    useEffect(() => {

        debugger;
        const intervalID = setInterval(() => {
            setSeconds((state: number) => state + 1)
            console.log('Tick')
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])
    if (seconds >= 60) {
        setMinutes(minutes + 1)
        setSeconds(0)
    }
    if (hours >= 24) {
        setHours(0)
    }
    if (minutes >= 60) {
        setHours(hours + 1)
        setMinutes(0)
    }


    let currentSeconds = get2digitsToString(seconds)
    let currentMinutes = get2digitsToString(minutes)
    let currentHours = get2digitsToString(hours)

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={time}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={time}/>
    }

    return <>
        {view}
    </>
}
export const get2digitsToString = (num: number) => num < 10 ? "0" + num : num

export type ClockViewPropsType = {
    date: Date
}

