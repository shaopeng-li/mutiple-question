import React from 'react';
import { Link } from 'react-router-dom';
import classes from './landing.module.css';
import { Button } from 'react-bootstrap';

const LandingPage = (props) => {
    return (
        <div className={classes.landingWraper}>
            <h1>Welcome to mutiple question app!</h1>
            <p>Please click below button for anwser question, you may get your point at last page!</p>
            <form>
                <input type="text" onChange={(event) => props.nameChangeHandler(event.target.value)} required></input>
                <Button onClick={props.start}>Click to start</Button>
            </form>
            {/* <button><Link to='/assignment'>Click to start</Link></button> */}
        </div>
    );
}

export default LandingPage;