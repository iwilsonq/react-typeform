import React from 'react';
import { browserHistory } from 'react-router';
import Button from './Button';

const Intro = () => {
  return (
    <div className="intro">
      <h2>Copyright Infringement Takedowns</h2>
      <p><em>Powered by PiraShield</em></p>

      <Button
        onClick={() => {
          browserHistory.push('/questions');
        }}
      >
        Start
      </Button>
    </div>
  );
};

export default Intro;
