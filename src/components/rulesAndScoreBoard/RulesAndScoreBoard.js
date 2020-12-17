import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCandyCane, faGift, faStar } from "@fortawesome/free-solid-svg-icons";

import { EventEmitter } from "../../utils/EventEmitter";

import './RulesAndScoreBoard.css';

export const RulesAndScoreBoard = () => {

    const [numberOfCandyCanes, setNumberOfCandyCanes] = useState(0);
    const [numberOfGifts, setNumberOfGifts] = useState(0);
    const [numberOfStars, setNumberOfStars] = useState(0);

    const findOpenedSymbols = (flapContentSymbols) => {
        let candy = numberOfCandyCanes;
        let gifts = numberOfGifts;
        let stars = numberOfStars;

        flapContentSymbols.map((symbol) => {
            switch (symbol.iconName) {
                case('candy-cane'):
                    candy++;
                    break;
                case('gift'):
                    gifts++;
                    break;
                case('star'):
                    stars++;
                    break;
            }
            return null;
        })
        setNumberOfCandyCanes(candy);
        setNumberOfGifts(gifts);
        setNumberOfStars(stars);
    }


    EventEmitter.subscribe('flapOpened', (flapContentSymbols) => {
        findOpenedSymbols(flapContentSymbols);
    });

    return (
        <div className="RulesAndScoreBoard">
            <div className="Rules">Collect 3 equal symbols or a total of 15 stars</div>
            <div className="ScoreBoard">
                <ul className="ScoreBoardList">
                    <li className="ScoreBoardItems">
                        <FontAwesomeIcon
                            className="Symbols"
                            icon={faStar}
                            size="lg"
                        />
                        Stars:
                        <div className="SymbolScore">{numberOfStars}</div>
                    </li>
                    <li className="ScoreBoardItems">
                        <FontAwesomeIcon
                            className="Symbols"
                            icon={faCandyCane}
                            size="lg"
                        />
                        Candy Canes:
                        <div className="SymbolScore">{numberOfCandyCanes}</div>
                    </li>
                    <li className="ScoreBoardItems">
                        <FontAwesomeIcon
                            className="Symbols"
                            icon={faGift}
                            size="lg"
                        />
                        Gifts:
                        <div className="SymbolScore">{numberOfGifts}</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};