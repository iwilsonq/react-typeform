import React, { Component } from 'react';
import Question from './Question';

export default class QuestionChain extends Component {
  state = {
    currentQuestion: 0
  };

  render() {
    console.log(this.state, this.props);
    return (
      <div className="question-chain">
        {this.props.questions.map((q, i) => {
          return <Question
            key={i}
            ask={q.ask}
            subject={q.subject}
            answerType={q.answerType}
          />
        })}
      </div>
    );
  }
}
