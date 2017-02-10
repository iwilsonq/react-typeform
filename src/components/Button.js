import React from 'react';

const Button = props => {
  return (
    <button
      type="button"
      className="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
