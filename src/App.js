import React, { Component } from 'react';
import QuestionSet from './containers/questionSet';
import LandingPage from './components/LandingPage';

class App extends Component {
  startAnswerQuestion = () => {
    console.log('button has been clicked!');
  }

  render() {
    return (
      <div className="App">
        <LandingPage start={this.startAnswerQuestion} />
        <QuestionSet />
      </div>
    );
  }
}

export default App;
