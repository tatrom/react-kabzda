import React, {useMemo, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {ItemType, Select, SelectPropsType} from "./Select";


export default {
    title: 'Select',
    component: Select,
}
const callback = action('Rating is clicked')

const Template: Story<SelectPropsType> = (args) => <Select {...args} />

export const WithValue: Story<SelectPropsType> = (args) => {
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


const NewSelect = React.memo(Select)
export const UseMemo = () => {
    let array = [
        {value: 1, title: "Kiev", people: 3000000, country: "Ukraine"},
        {value: 2, title: "Minsk", people: 2000000, country: "Belarus"},
        {value: 3, title: "Moscow", people: 10000000, country: "Russia"},
        {value: 4, title: "Kharkov", people: 1000000, country: "Ukraine"},
        {value: 5, title: "Bakhmut", people: 70000, country: "Ukraine"},
        {value: 6, title: "Odessa", people: 1000000, country: "Ukraine"},
    ]
    const [value, setValue] = useState('2')
    const ukraineCities = useMemo(() => {
        return array.map(c => {
            let country: ItemType = {
                value: 1,
                title: ""
            }
            console.log("Cities of Ukraine rendered")

            if (c.country === "Ukraine") {
                country.value = c.value
                country.title = c.title
                return country
            }
            return country
        })
    }, [array])

    const belarusCities = useMemo(() => {
        return array.map(c => {
            let country: ItemType = {
                value: 1,
                title: ""
            }
            console.log("Cities of Belarus rendered")

            if (c.country === "Belarus") {
                country.value = c.value
                country.title = c.title
                return country
            }
            return country
        })
    }, [array])

    const smallCities = useMemo(() => {
        return array.map(c => {
            let country: ItemType = {
                value: 1,
                title: ""
            }
            console.log("Small cities rendered")

            if (c.people <= 1000000) {
                country.value = c.value
                country.title = c.title
                return country
            }
            return country
        })
    }, [array])
    return <div>
        <NewSelect
            onChange={setValue}
            items={ukraineCities}/>
        <NewSelect
            onChange={setValue}
            items={belarusCities}/>
        <NewSelect
            onChange={setValue}
            items={smallCities}/>
    </div>
}