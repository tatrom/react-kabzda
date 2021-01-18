import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input',
};

const Template: Story = (args) => <input {...args} />

export const UncontrolledInput = Template.bind({})
export const ControlledInputWithFixedValue = Template.bind({})
ControlledInputWithFixedValue.args = {
    value: 1
}

const callback = action("want to change")

export const ControlledInput: Story = (args) => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
        debugger;

    }
    return <input value={parentValue} onChange={onChange}/>
}
ControlledInput.args = {}

export const ControlledCkeckbox: Story = (args) => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
        debugger;

    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}
ControlledCkeckbox.args = {}

export const ControlledSelect: Story = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: FormEvent<HTMLOptionElement>) => {
        setParentValue(e.currentTarget.value);
    }
    return <select value={parentValue}>
        <option>none</option>
        <option value={1} onChange={onChange}>Minsk</option>
        <option value={2} onChange={onChange}>Moscow</option>
        <option value={3} onChange={onChange}>Kiev</option>
    </select>
}
ControlledSelect.args = {

}

export const TrackValueOfUncontrolledInput: Story = (args) => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <> <input {...args} onChange={onChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputBuButtonPress: Story = (args) => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}> save
        </button>
        - actual value: {value}</>
}