import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onChange: (value: boolean) => void
}


function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={onClicked}>On
        </div>
        <div style={offStyle} onClick={offClicked}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}

export default UncontrolledOnOff;

