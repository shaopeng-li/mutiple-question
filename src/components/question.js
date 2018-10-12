import React from 'react';

const question = (props) => {
    return (
        <div>
            <h2>{props.details.title}</h2>
            <p>{props.details.question}</p>
            <button onClick={() => props.chooseAnswer('yes')}>Yes</button>
            <button onClick={() => props.chooseAnswer('no')}>No</button>
        </div>
    );
}

export default question;