import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import { action} from "@storybook/addon-actions";
import UncontrolledOnOff, {UncontrolledOnOffPropsType} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,

}
const callback = action("on or off clicked")

const Template: Story<UncontrolledOnOffPropsType> = (args) => <UncontrolledOnOff {...args} />

export const OffMode = Template.bind({})
OffMode.args = {
    onChange: callback
}

export const OnMode = Template.bind({})
OnMode.args = {
    onChange: callback,
    defaultOn: true
}


