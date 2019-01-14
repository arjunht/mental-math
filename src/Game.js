import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    const newValuesArray = this.makeNewQuestion();
    this.state = {
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3]
    }
  }
  
  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }

  updateState = newValuesArray => {
    this.setState({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3]
    });
  }

  updateCounters = event => {
    const newValuesArray = this.makeNewQuestion();
    this.updateState(newValuesArray);
    const answerWasCorrect = this.evaluateAnswer(event.target.name);
    this.props.updateCounters(answerWasCorrect);
  }

  evaluateAnswer = answer => {
    const { value1, value2, value3, proposedAnswer } = this.state
    let correctAnswer;
    if(proposedAnswer === value1 + value2 + value3){
      correctAnswer = true;
    } else {
      correctAnswer = false;
    }
    
    if((correctAnswer === true && answer === 'true') ||
      (correctAnswer === false && answer === 'false')) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={this.updateCounters} name='true'>True</button>
        <button onClick={this.updateCounters} name='false'>False</button>
      </div>
    );
  }
}

export default Game;