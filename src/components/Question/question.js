import React from 'react';
import classes from './question.module.css';
import { Button } from 'react-bootstrap';

const question = (props) => {
    let yesStyle = "primary";
    let noStyle = "primary";

    if (props.details.selected === 'yes') {
        yesStyle = "danger";
    }
    if (props.details.selected === 'no') {
        noStyle = "danger";
    }

    return (
        <div className={classes.questionWrap}>
            <h2 className={classes.title}>{props.details.title}</h2>
            <p className={classes.question}>{props.details.question}</p>
            <div className={classes.q_btn}>
                <Button bsStyle={yesStyle} onClick={() => props.chooseAnswer('yes')}>YES</Button>
                <Button bsStyle={noStyle} onClick={() => props.chooseAnswer('no')}>NO</Button>
            </div>
        </div>
    );
}

export default question;