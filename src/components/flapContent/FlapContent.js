import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './FlapContent.css';

export const FlapContent = (props) => {
console.log(props)
    return (
        <>
            {props.symbols.map((symbol, index, arr) => {
                return(
                    <div className="FlapContent" key={index} id={`FlapContent_${index}`}>
                        <FontAwesomeIcon
                            id={`FlapContent_${index}_symbol`}
                            icon={symbol}
                            size="xs"
                        />
                    </div>
                );
            })

            }
        </>
    );
};