import React from 'react';
import { Flap } from "../flap/Flap";

import './Calendar.css';
import { Header } from "../header/Header";

export const Calendar = () => {

    const days = Array.from(Array(24).keys());
    const listItems = days.map((number) => <Flap key={ number + 1 } dayNumber={ number + 1 } />);

    return (
        <div className="Calendar">
            <Header />
            <div className="CalendarListContainer">
                <ul className="CalendarList">
                    {listItems}
                </ul>
            </div>
        </div>
    );
};