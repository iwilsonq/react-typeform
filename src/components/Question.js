import React from 'react';
import Button from './Button';

const Question = props => {
  return (
    <div
      className="question"
      name={props.id}
      id={props.id}
    >
      <h2>{props.ask}</h2>

      { props.answerType === 'text' ?
        <input
          className='text-input'
          name={props.subject}
          placeholder={props.subject}
          type="text"
        /> :
        <textarea
          className='multi-line-text-input'
          name={props.subject}
          placeholder={props.subject}
          type="text"
          rows="10"
        ></textarea>
      }

    <Button
      onClick={() => { props.onSubmit(props.questionNumber) }}
      >
      Submit
    </Button>
    </div>
  );
};

export default Question;
