import React, { Component } from 'react';
import Question from '../../components/Question/question';
import Header from '../../components/Header/header';
import classes from './questionSet.module.css';
import { Button } from 'react-bootstrap';
import navImg from '../../assets/prev.jpg';

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
        answers: [],
        showScore: false,
        score: 0 
    }

    chooseAnswerHandler = (answer) => {
        let rsQuestionSet = this.state.questionSet.map((q) => {
            return {...q};
        });
        let rsQuestion = rsQuestionSet[this.state.currentQuestion - 1];
        rsQuestion.selected = answer;
        rsQuestionSet[this.state.currentQuestion - 1] = rsQuestion;
        let rsAnswer = [...this.state.answers];
        rsAnswer[this.state.currentQuestion - 1] = rsQuestion.answer === rsQuestion.selected ? rsQuestion.point : 0;
        this.setState({ questionSet: rsQuestionSet, answers: rsAnswer, showScore: false });
        this.nextHandler();
    }

    prevHandler = () => {
        if (this.state.currentQuestion > 1) {
            this.setState((state, props) => {
                return { currentQuestion: state.currentQuestion - 1, showScore: false };
            });
        }
    }

    nextHandler = () => {
        if (this.state.currentQuestion < this.state.questionSet.length) {
            this.setState((state, props) => {
                return { currentQuestion: state.currentQuestion + 1, showScore: false };
            });
        }
    }

    showScoreClickHandler = () => {
        let score = this.state.answers.reduce((acc, curr) => { return acc + curr; });
        this.setState({
            showScore: true,
            score: score
        });
    }

    render() {
        let details = this.state.questionSet[this.state.currentQuestion - 1];
        let scoreButton = null;
        let scoreBoard = null;
        if (this.state.currentQuestion === this.state.questionSet.length) {
            scoreButton = <Button className={classes.showTotalBtn} onClick={this.showScoreClickHandler}>Show my score</Button>
        }
        if (this.state.showScore) {
            scoreBoard = <p className={classes.total}>{this.state.score}</p>
        }


        return (
            <div className={classes.questionSetWrap}>
                <img className={classes.navBack} onClick={this.prevHandler} src={navImg}/>
                <div className={classes.main}>
                    <Header 
                        curr={this.state.currentQuestion}
                        total={this.state.questionSet.length}/>
                    <Question
                        details={details} 
                        chooseAnswer={this.chooseAnswerHandler} />
                    {scoreButton}
                    {scoreBoard}
                </div>
                <img className={classes.navNext} onClick={this.nextHandler} src={navImg}/>
            </div>
        );
    }
}

export default QuestionSet;