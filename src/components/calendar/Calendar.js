import React from 'react';
import {Flap} from "../flap/Flap";

import './Calendar.css';
import { Header } from "../header/Header";

export const Calendar = () => {

    const days = Array.from(Array(24).keys());
    const listItems = days.map((number) => <Flap dayNumber={number+1}/>);

    return (
        <div className="Calendar">
            <Header/>
            <ul className="CalendarList">
                {listItems}
            </ul>
        </div>
    );
};