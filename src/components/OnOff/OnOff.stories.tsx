import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import { action} from "@storybook/addon-actions";
import {OnOff, OnOffType} from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,

}

const callback = action("on or off clicked")

const Template: Story<OnOffType> = (args) => <OnOff {...args} />

export const OnMode = Template.bind({})
OnMode.args = {
    on: true,
    onChange: callback
}

export const OffMode = Template.bind({})

OffMode.args = {
    on: false,
    onChange: callback
}

export const OnOffChanging:Story<OnOffType> = (args) => {
   const [state, setState] = useState<boolean>(true)
    return <OnOff on={state} onChange={setState} />
}

