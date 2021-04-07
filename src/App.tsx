import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from "./components/OnOff/OnOff";
import {AccordionUncontrolled} from "./components/AccordionUncontrolled/AccordionUncontrolled";
import {RatingUncontrolled} from "./components/RatingUncontrolled/RatingUncontrolled";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./Select/Select";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [collapsed, setCollapsed] = useState<boolean>(false)

    const selectItems = [{
        title: 'Book',
        value: '1'
    },
        {
            title: 'Car',
            value: '2'
        },
        {
            title: 'House',
            value: '3'
        },
        {
            title: 'Flat',
            value: '4'
        }
    ]
    let [value, setValue] = useState<string>(selectItems[0].title)
    const changeValue = (title: string) => {
        debugger;
        let newValue = selectItems.find(item => item.title === title && item.title)
        debugger;
        if (newValue)
            setValue(newValue.title)
    }
    const changeRatingValue = (value: RatingValueType) => {
        setRatingValue(value)
    }

    const OnOffContainer = React.memo(OnOff);
    const UncontrolledOnOffContainer = React.memo(UncontrolledOnOff);
    const AccordionUncontrolledContainer = React.memo(AccordionUncontrolled);
    const RatingUncontrolledContainer = React.memo(RatingUncontrolled);
    const RatingContainer = React.memo(Rating);
    const AccordionContainer = React.memo(Accordion);
    return (
        <div>
            <OnOffContainer on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOffContainer onChange={setSwitchOn}/> {switchOn.toString()}
            <AccordionUncontrolledContainer titleValue={"Menu"}/>
            <RatingUncontrolledContainer onChange={() => setSwitchOn}/>
            <AccordionContainer titleValue={"Menu"} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}
                                items={[]} onClick={(value: any) => console.log('Hellow')}/>
            <RatingContainer value={ratingValue} onClick={changeRatingValue}/>

            <Select value={value} onChange={changeValue} items={selectItems}/>
        </div>
    );
}


export default App;
