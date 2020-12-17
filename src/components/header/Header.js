import React from 'react';

import './Header.css';
import {RulesAndScoreBoard} from "../rulesAndScoreBoard/RulesAndScoreBoard";

export const Header = () => {

    return (
        <div className="Header">
            <h2 className="CalendarTitle">Christmas calendar</h2>
            <RulesAndScoreBoard/>
        </div>
    );
};