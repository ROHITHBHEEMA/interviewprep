import React from 'react';
import './Homebody.css';



function Homebody(props) {
    return (
        <div className="hom">
            <div className="ho">
                
                    <div className="ques">
                    <b><h5>{props.title}</h5></b>
                    <p>{props.question}</p>
                    <p>{props.date}</p>
                    </div>
                
                
            </div>
            
        </div>
    )
}

export default Homebody
