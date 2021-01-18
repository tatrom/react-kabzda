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
        let newValue = selectItems.find( item => item.title === title && item.title)
        debugger;
        if (newValue)
        setValue(newValue.title)
    }
    return (
        <div>
            {/*<OnOff on={switchOn} onChange={setSwitchOn} />*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}*/}
            {/*<AccordionUncontrolled titleValue={"Menu"} />*/}
            {/*<RatingUncontrolled />*/}
            {/*<Accordion titleValue={"Menu"} collapsed={collapsed} onChange={ () => setCollapsed(!collapsed)} items={[]} onClick={(value:any) => console.log('Hellow')}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
            <Select value={value} onChange={changeValue} items={selectItems}/>
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string;
// }
//
// function PageTitle(props: PageTitlePropsType) {
//   console.log("PageTitle rendering");
//   return (
//       <h1>{props.title}</h1>
//   )
// }


export default App;
