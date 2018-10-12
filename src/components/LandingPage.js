import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (props) => (
    <div>
        <h1>Welcome to mutiple question app!</h1>
        <p>Please click below button for anwser question, you may get your point at last page!</p>
        <button onClick={props.start}>Click to start</button>
        {/* <button><Link to='/assignment'>Click to start</Link></button> */}
    </div>
);

export default LandingPage;