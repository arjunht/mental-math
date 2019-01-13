import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.value1 = Math.floor(Math.random() * 100);
    this.value2 = Math.floor(Math.random() * 100);
    this.value3 = Math.floor(Math.random() * 100);
    this.proposedAnswer = Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3;
  }
  state = {
    numQuestions: 0,
    numCorrect: 0
  }
  updateCounters = (answer) => {
    let correctAnswer, numCorrectIncrementValue;
    if(this.proposedAnswer === this.value1 + this.value2 + this.value3){
      correctAnswer = true;
    } else {
      correctAnswer = false;
    }
    if(answer === correctAnswer){
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
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.value1} + ${this.value2} + ${this.value3} = ${this.proposedAnswer}`}</p>
          </div>
          <button onClick={() => {this.updateCounters(true)}}>True</button>
          <button onClick={() => {this.updateCounters(false)}}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
