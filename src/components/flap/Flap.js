import React, { useState } from 'react';
import { FlapContent } from "../flapContent/FlapContent";

import './Flap.css';
import { faCandyCane, faGift, faStar } from "@fortawesome/free-solid-svg-icons";

const iconNames = [faGift, faCandyCane, faStar];

export const Flap = (props) => {

    const createRandomSymbolList = () => {
        const randomSymbolList = [
            iconNames[Math.floor(Math.random() * iconNames.length)],
            iconNames[Math.floor(Math.random() * iconNames.length)],
            iconNames[Math.floor(Math.random() * iconNames.length)]
        ]

        return randomSymbolList;
    }

    const [isFlipped, setIsFlipped] = useState(false);
    const [dayNumber] = useState(props.dayNumber);
    const [flapContentSymbols] = useState(createRandomSymbolList);


    const openFlap = () => {
        if (!isFlipped) {
            document.querySelector(`#FlipCard_${dayNumber} .FlipCardInner`).style.transform = `rotateY(180deg)`;
            setIsFlipped(true);
        } else {
            document.querySelector(`#FlipCard_${dayNumber} .FlipCardInner`).style.transform = `rotateY(0deg)`;
            setIsFlipped(false);
        }
    }
    return (
        <li className="Flap" onClick={openFlap} isflipped={isFlipped.toString()}>
            <div className="FlipCard" id={`FlipCard_${dayNumber}`}>
                <div className="FlipCardInner">
                    <div className="FlapFront">{dayNumber}</div>
                    <div className="FlapBack">
                        <div className="FlapBackDayNumber">{dayNumber}</div>
                        <div className="FlapContentList">
                            <FlapContent symbols={flapContentSymbols}/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};