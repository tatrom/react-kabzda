import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";


export default {
    title: 'Select',
    component: Select,
}
const callback = action('Rating is clicked')

const Template: Story<SelectPropsType> = (args) => <Select {...args} />

export const WithValue:Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState('2')
    return <Select {...args} onChange={setValue} value={value}/>
}
WithValue.args = {
    items: [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Kiev"}
    ],
}

export const WithoutValue = Template.bind({})
WithoutValue.args = {
    onChange: action("Value changed"),
    items: [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Kiev"}
    ],
}

