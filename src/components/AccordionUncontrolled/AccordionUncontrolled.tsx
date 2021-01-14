import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string;
}

function Accordion(props:AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true);
    return <div>
        <AccordionTitle title={props.titleValue} /><button onClick={ () => {setCollapsed(!collapsed)}}>+</button>
        { !collapsed && <AccordionBody/> }
    </div>
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>--{props.title}--</h3>
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

export default Accordion;