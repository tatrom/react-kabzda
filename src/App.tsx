import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from "./components/OnOff/OnOff";
import {AccordionUncontrolled} from "./components/AccordionUncontrolled/AccordionUncontrolled";
import {RatingUncontrolled} from "./components/RatingUncontrolled/RatingUncontrolled";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <div>
            <OnOff on={switchOn} onChange={setSwitchOn} />
            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
            <AccordionUncontrolled titleValue={"Menu"} />
            {/*<RatingUncontrolled />*/}
            <Accordion titleValue={"Menu"} collapsed={collapsed} onChange={ () => setCollapsed(!collapsed)} items={[]}/>
            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            <Rating value={ratingValue} onClick={setRatingValue} />
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
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
