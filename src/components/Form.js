import React, { Component } from 'react';
import Intro from './Intro';
import QuestionChain from './QuestionChain';

const questions = [
  {
    ask: 'What is your name?',
    subject: 'name',
    answerType: 'text'
  },
  {
    ask: 'What is the title of the course that was stolen?',
    subject: 'course',
    answerType: 'text'
  },
  {
    ask: 'Please paste the links to your stolen content below',
    subject: 'links',
    answerType: 'multi-line'
  }
];

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <QuestionChain questions={questions} />
      </div>
    );
  }
}
