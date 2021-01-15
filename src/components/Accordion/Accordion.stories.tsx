import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

const GetCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Events')
        },
        items: {...GetCategoryObj('main')},
        collapsed: {...GetCategoryObj('main')},
        titleValue: {...GetCategoryObj('main')}
    }
}
const callback = action("accordion mode change event fired");
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbacksProps = {
    onChange: callback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Menu",
    collapsed: true,
    items: [ {title: "Roman", value: 2}, {title: "Ivan", value: 3}]
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Users",
    collapsed: false,
    items: []
}


export const ModeChanging:Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion {...args} collapsed={value} onChange={ () => setValue(!value)}/>
}

ModeChanging.args = {
    titleValue: "Users",
    items: [
        {title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Viktor", value: 4}
    ]
}
