import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: string) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    const onClickHandler = (e: string) => {
        setCollapsed(!collapsed);
        props.onChange(e);
    }
    return (
        <div className={s.select}>
            <div className={s.title} onClick={() => setCollapsed(!collapsed)}>{props.value} <img src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/20305395141540882611-512.png" alt=" " width={"20px"}/></div>

            <div className={ !collapsed ? s.select_body : ""}>
            {!collapsed &&
            props
                .items.map(i => <div className={s.select_item} onClick={() => onClickHandler(i.title)} >{i.title}</div>)
            }
            </div>
        </div>
    )
}