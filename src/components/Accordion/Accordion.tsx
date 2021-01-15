import React, {useState} from 'react';

export type ItemType = {
    title: string
    value: number
}
export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when is opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * optional color of header text
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onChange} color={props.color}/>
        {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>
}

type AccordionTitlePropsType = {

    title: string;
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Accordion title rendering")
    return (
        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={props.onClick}>--{props.title}--</h3>
    )
}

type AccordionBodyType = {
    items: Array<ItemType>
}

function AccordionBody(props: AccordionBodyType) {

    return (
        <ul>
            {props.items.map(item => {
                return (
                    <li>{item.title}</li>
                )
            })}
        </ul>
    )
}
