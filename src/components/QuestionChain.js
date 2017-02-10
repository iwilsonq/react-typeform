import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Question from './Question';

export default class QuestionChain extends Component {
  state = {
    currentQuestion: 0
  };

  handleSubmitAnswer() {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  }

  componentDidUpdate() {
    if (this.state.currentQuestion >= this.props.questions.length) {
      browserHistory.push('/thanks');
    }
  }

  render() {
    return (
      <div className="question-chain">
        {this.props.questions.map((q, i) => {
          if (this.state.currentQuestion >= i) {
            return <Question
              key={i}
              ask={q.ask}
              subject={q.subject}
              answerType={q.answerType}
              onSubmit={this.handleSubmitAnswer.bind(this)}
            />
          }
          return null;
        })}
      </div>
    );
  }
}
