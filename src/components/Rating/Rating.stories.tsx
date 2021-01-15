import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Rating, RatingPropsType, RatingValueType} from './Rating';


export default {
    title: 'Rating stories',
    component: Rating,
}
const callback = action('Rating is clicked')

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />

const callbacksProps = {
    onClick: callback
}
export const Rating1 = Template.bind({})
Rating1.args = {
    ...callbacksProps,
    value: 1
}

export const Rating2 = Template.bind({})
Rating2.args = {
    ...callbacksProps,
    value: 2
}

export const Rating3 = Template.bind({})
Rating3.args = {
    ...callbacksProps,
    value: 3
}

export const Rating4 = Template.bind({})
Rating4.args = {
    ...callbacksProps,
    value: 4
}

export const Rating5 = Template.bind({})
Rating5.args = {
    ...callbacksProps,
    value: 5
}

export const RatingChanging:Story<RatingPropsType> = (args) => {
    const [rating, setRating] = useState<RatingValueType>(2);
    return < Rating value={rating} onClick={setRating} />
}



