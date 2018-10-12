import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import QuestionSet from './containers/questionSet';
import LandingPage from './components/LandingPage';

class App extends Component {
  startAnswerQuestion = () => {
    this.props.history.push('/assignment');
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact render={() => (<LandingPage start={this.startAnswerQuestion} />)} />
          <Route path='/assignment' component={QuestionSet} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
