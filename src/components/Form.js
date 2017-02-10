import React, { Component } from 'react';

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
  constructor() {
    super();

    this.state = {
      questions
    };
  }

  render() {
    return (
      <div className="form">
        {React.cloneElement(this.props.children, this.state)}
      </div>
    );
  }
}
