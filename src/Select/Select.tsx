import React, {useEffect, useState} from 'react';
import s from './Select.module.css'
import {KeyboardEvent} from "react";

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: string
    onChange: (value: string) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.title === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (title: string) => {
        props.onChange(title)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(props.items[i + 1].value)
                        return;
                    }
                }
            }
            if (!selectedItem)
            props.onChange(props.items[0].value)

        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false);
        }
    }
    return (
        <div>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.title)
                            }}
                        >
                            {i.title}
                        </div>)}
                    </div>
                }
            </div>
        </div>
    )
}