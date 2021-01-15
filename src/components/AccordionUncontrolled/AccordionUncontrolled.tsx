import React, {useState} from 'react';

export type AccordionUncontrolledPropsType = {
    titleValue: string;
}

export function AccordionUncontrolled(props:AccordionUncontrolledPropsType) {
    let [collapsed, setCollapsed] = useState(true);
    return <div>
        <AccordionTitle title={props.titleValue} onClick={ () => setCollapsed(!collapsed)} />

        { !collapsed && <AccordionBody/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => {props.onClick()}}>--{props.title}--</h3>
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