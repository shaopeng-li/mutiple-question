import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './landing.module.css';
import { Button } from 'react-bootstrap';
import CheckboxContainer from '../../containers/CheckboxContainer/CheckboxContainer';

// const LandingPage = (props) => {
//     return (
//         <div className={classes.landingWraper}>
//             <h1>Welcome to mutiple question app!</h1>
//             <p>Please click below button for anwser question, you may get your point at last page!</p>
//             <Button type="submit" onClick={props.start}>Click to start</Button>
//             {/* <button><Link to='/assignment'>Click to start</Link></button> */}
//         </div>
//     );
// }

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.textRef = React.createRef();
        this.btnClickhandler = this.btnClickhandler.bind(this);
    }

    btnClickhandler() {
        console.log(this.textRef.current.value);
    }

    checkboxHandler() {

    }

    render() {
        return (
            <div className={classes.landingWraper}>
                <h1>Welcome to mutiple question app!</h1>
                <p>Please click below button for anwser question, you may get your point at last page!</p>
                <input type="text" ref={this.textRef} />
                {/* <Button type="submit" onClick={this.btnClickhandler}>Click to start</Button> */}
                <Button type="submit" onClick={() => this.props.start(this.textRef.current.value)}>Click to start</Button>
                {/* <button><Link to='/assignment'>Click to start</Link></button> */}
                <div>
                    <CheckboxContainer />
                </div>
            </div>
        );
    }
}

export default LandingPage;