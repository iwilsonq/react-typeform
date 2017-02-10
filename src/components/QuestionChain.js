import React, { Component } from 'react';

export default class QuestionChain extends Component {
  state = {
    currentQuestion: 0
  };

  render() {
    console.log(this.state, this.props);
    return (
      <div className="question-chain">
        q chain
      </div>
    );
  }
}
