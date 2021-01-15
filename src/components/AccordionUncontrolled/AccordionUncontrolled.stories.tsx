import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import { action} from "@storybook/addon-actions";
import {AccordionUncontrolled, AccordionUncontrolledPropsType} from "./AccordionUncontrolled";


export default {
    title: 'AccordionUncontrolled',
    component: AccordionUncontrolled,
}

const callback = action("accordion uncontrolled action");

const Template:Story<AccordionUncontrolledPropsType> = (args) => <AccordionUncontrolled {...args} />

export const AccordionMovies = Template.bind({})
AccordionMovies.args = {
    titleValue: "Movies"
}