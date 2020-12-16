import React from 'react';

import './Flap.css';

export const Flap = (props) => {
    return (
        <li className="FlapNumber">
            {props.dayNumber}
        </li>
    );
};