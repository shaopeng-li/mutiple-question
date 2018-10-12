import React from 'react';

const question = (props) => {
    let yesStyle = null;
    let noStyle = null;

    const style = {
        backgroundColor: 'gray',
        color: 'white',
        border: '1px solid bule'
    }

    if (props.details.selected === 'yes') {
        yesStyle = style;
    }
    if (props.details.selected === 'no') {
        noStyle = style;
    }

    return (
        <div>
            <h2>{props.details.title}</h2>
            <p>{props.details.question}</p>
            <button style={yesStyle} onClick={() => props.chooseAnswer('yes')}>Yes</button>
            <button style={noStyle} onClick={() => props.chooseAnswer('no')}>No</button>
        </div>
    );
}

export default question;