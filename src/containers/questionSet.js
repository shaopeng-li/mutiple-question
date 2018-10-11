import React, { Component } from 'react';
import Question from '../components/question';

class QuestionSet extends Component {
    state = {
        questionSet: [
            {
                title: 'What is react js?',
                question: 'React js is a javascript library mantained by Facebook',
                answer: 'yes',
                point: 3,
                selected: ''
            },
            {
                title: 'What is type script?',
                question: 'type script is a programming language',
                answer: 'no',
                point: 1,
                selected: ''
            },
            {
                title: 'What is Angular?',
                question: 'Angular is a javascript framework developed by Google',
                answer: 'yes',
                point: 3,
                selected: ''
            },
            {
                title: 'Who is current prisident of United State?',
                question: 'Ass hole',
                answer: 'yes',
                point: 10,
                selected: ''
            }
        ],
        currentQuestion: 1,
        answers: [] 
    }

    chooseAnswerHandler = (answer) => {
        
    }

    prevHandler = () => {

    }

    nextHandler = () => {

    }

    render() {
        let details = this.state.questionSet[this.state.currentQuestion - 1];

        return (
            <div>
                <p>This is question set component</p>
                <p>Step {this.state.currentQuestion} of {this.state.questionSet.length}</p>
                <Question details={details} chooseAnswer={this.chooseAnswerHandler}/>
            </div>
        );
    }
}

export default QuestionSet;