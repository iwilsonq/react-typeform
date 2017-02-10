import React, { Component } from 'react';
import Intro from './Intro';
import QuestionChain from './QuestionChain';

const questions = [
  {
    ask: 'What is your name?',
    answerType: 'text'
  },
  {
    ask: 'What is the title of the course that was stolen?',
    answerType: 'text'
  },
  {
    ask: 'Please paste the links to your stolen content below',
    answerType: 'multi-line'
  }
];

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <Intro />
        <QuestionChain questions={questions} />
      </div>
    );
  }
}
