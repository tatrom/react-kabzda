import React, {useReducer} from 'react';
import {reducer} from "./reducer";

export type AccordionUncontrolledPropsType = {
    titleValue: string;
}



export function AccordionUncontrolled(props: AccordionUncontrolledPropsType) {
    // let [collapsed, setCollapsed] = useState(true);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});
    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: "TOGGLE-COLLAPSED"})}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>--{props.title}--</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}