import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {
    const[collapsed, setCollapsed] = useState(true)
    const onClickHandler = (e: string) => {
        setCollapsed(!collapsed);
        props.onChange(e);
    }
    return (
        <div>
            <h3 onClick={() => setCollapsed(false)}>{props.value}</h3>
            { collapsed && props.items.map(i => <div onClick={() => onClickHandler(i.title)}>{i.title}</div>)}
        </div>)
}
