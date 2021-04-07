import React from "react";
import {ClockViewPropsType, get2digitsToString} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        current
        time:{get2digitsToString(date.getHours())}:{get2digitsToString(date.getMinutes())}:{get2digitsToString(date.getSeconds())}
    </>
}