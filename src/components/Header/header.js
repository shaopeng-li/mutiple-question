import React from 'react';
import classes from './header.module.css';
import { Button } from 'react-bootstrap';

const Header = (props) => {
    return (
        <div className={classes.headerWraper}>
            <p>Step {props.curr} of {props.total}</p>
        </div>
    );
}

export default Header;