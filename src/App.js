import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import QuestionSet from './containers/QuestionSet/questionSet';
import LandingPage from './components/Landing/LandingPage';

class App extends Component {
  startAnswerQuestion = (name) => {
    // this.props.history.push('/assignment');
    console.log(name);
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
