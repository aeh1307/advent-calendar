import React, { useState } from 'react';

import './Flap.css';

export const Flap = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [dayNumber, setDayNumber] = useState(props.dayNumber);

    const openFlap = (e) => {
        if (!isFlipped) {
            document.querySelector(`#FlipCard_${dayNumber} .FlipCardInner`).style.transform = `rotateY(180deg)`;
            setIsFlipped(true);
        } else {
            document.querySelector(`#FlipCard_${dayNumber} .FlipCardInner`).style.transform = `rotateY(0deg)`;
            setIsFlipped(false);
        }
    }
    return (
        <li className="Flap" onClick={(e) => openFlap(e)} isflipped={isFlipped}>
            <div className="FlipCard" id={`FlipCard_${dayNumber}`}>
                <div className="FlipCardInner">
                    <div className="FlapFront">{dayNumber}</div>
                    <div className="FlapBack"></div>
                </div>
            </div>
        </li>
    );
};