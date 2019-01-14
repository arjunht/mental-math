import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Score from './Score'

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0
  }
  updateCounters = (answerWasCorrect) => {
    let numCorrectIncrementValue;
    if(answerWasCorrect){
      numCorrectIncrementValue = 1;
    } else {
      numCorrectIncrementValue = 0;
    }
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1,
      numCorrect: currentState.numCorrect + numCorrectIncrementValue
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game updateCounters={this.updateCounters} />
        <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
      </div>
    );
  }
}

export default App;
