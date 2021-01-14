import React, {useState} from 'react';


function OnOff() {
    console.log("OnOff rendering")
    let [on, setOn] = useState(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        cursor: "pointer",
        background: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        cursor: "pointer",
        background: !on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "5px",
        cursor: "pointer",
        background: on ? "green" : "red"
    };

    return <div>
        <div style={onStyle} onClick={ () => { setOn(true)}} >On</div>
        <div style={offStyle} onClick={ () => { setOn(false)}} >Off</div>
        <div style={indicatorStyle} ></div>
    </div>
}

export default OnOff;

