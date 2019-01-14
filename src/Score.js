import React from 'react';

const Score = (props) => {
  return (
    <p className="text">
      Your Score: {this.props.numCorrect}/{this.props.numQuestions}
    </p>
  );
}

export default Score;