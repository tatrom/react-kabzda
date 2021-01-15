import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {RatingPropsType, RatingUncontrolled} from "./RatingUncontrolled";
import {action} from "@storybook/addon-actions";


export default {
    title: 'RatingUncontrolled',
    component: RatingUncontrolled,
}
const callback = action('rating changed inside components')

const Template:Story<RatingPropsType> = (args) => <RatingUncontrolled {...args} />

const callbacksProps = {
    onChange: callback
}
export const Rating1 = Template.bind({})
Rating1.args = {
    ...callbacksProps,
    defaultValue: 1
}

export const Rating2 = Template.bind({})
Rating2.args = {
    ...callbacksProps,
    defaultValue: 2
}

export const Rating3 = Template.bind({})
Rating3.args = {
    ...callbacksProps,
    defaultValue: 3
}

export const Rating4 = Template.bind({})
Rating4.args = {
    ...callbacksProps,
    defaultValue: 4
}

export const Rating5 = Template.bind({})
Rating5.args = {
    ...callbacksProps,
    defaultValue: 5
}
