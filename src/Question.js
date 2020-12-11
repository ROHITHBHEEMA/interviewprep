import React from 'react';
import './Question.css';

function Question(props) {
    return (
        <div className="que">
            <h2>Interview Problem</h2>
            <h2>{props.questi}</h2>
            

        </div>
    )
}

export default Question
