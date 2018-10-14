import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import QuestionSet from './containers/QuestionSet/questionSet';
import LandingPage from './components/Landing/LandingPage';

class App extends Component {
  state = {
    userName: ''
  }

  startAnswerQuestion = () => {
    this.props.history.push('/assignment');
  }

  nameChangeHandler = (name) => {
    this.setState({userName: name});
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact render={() => (<LandingPage start={this.startAnswerQuestion} nameChangeHandler={this.nameChangeHandler} />)} />
          <Route path='/assignment' render={() => <QuestionSet userName={this.state.userName} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
