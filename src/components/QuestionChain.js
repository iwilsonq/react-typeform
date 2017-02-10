import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Question from './Question';

export default class QuestionChain extends Component {
  state = {
    currentQuestion: 0,
    answeredQuestions: []
  };

  handleSubmitAnswer(questionNumber) {
    const { currentQuestion, answeredQuestions } = this.state;
    if (!answeredQuestions.includes(questionNumber)) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        answeredQuestions: answeredQuestions.concat(questionNumber)
      });
    }
  }

  componentDidUpdate() {
    if (this.state.answeredQuestions.length >= this.props.questions.length) {
      browserHistory.push('/thanks');
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="question-chain">
        {this.props.questions.map((q, i) => {
          if (this.state.currentQuestion >= i) {
            return <Question
              key={i}
              questionNumber={i + 1}
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
