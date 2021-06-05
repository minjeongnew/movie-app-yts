import React from 'react';
import './Button.css';

const Button = ({ idx, img, callback}) => {
    return (
        <button
            className="Button"
            index={idx}
            onClick={callback}>

            <img src={img} style={{'width':'95px'}} />
        </button>
    );
};

export default Button;
