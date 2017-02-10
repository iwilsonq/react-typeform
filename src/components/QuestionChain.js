import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Scroll from 'react-scroll';
import Question from './Question';

export default class QuestionChain extends Component {
  state = {
    currentQuestion: 0,
    answeredQuestions: []
  };

  handleSubmitAnswer(questionNumber) {
    console.log(questionNumber);
    const { currentQuestion, answeredQuestions } = this.state;
    if (!answeredQuestions.includes(questionNumber)) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        answeredQuestions: answeredQuestions.concat(questionNumber)
      });
    }
  }

  scrollToNextQuestion() {
    const nextQuestion = document.getElementById(`${this.state.currentQuestion}`)
    Scroll.scroller.scrollTo(nextQuestion.id, {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  }

  componentDidUpdate() {
    if (this.state.answeredQuestions.length >= this.props.questions.length) {
      browserHistory.push('/thanks');
    }
    this.scrollToNextQuestion();
  }

  render() {
    return (
      <div className="question-chain">
        {this.props.questions.map((q, i) => {
          if (this.state.currentQuestion >= i) {
            return <Question
              key={i}
              id={i}
              ask={q.ask}
              subject={q.subject}
              answerType={q.answerType}
              questionNumber={i + 1}
              onSubmit={this.handleSubmitAnswer.bind(this)}
            />
          }
          return null;
        })}
      </div>
    );
  }
}
