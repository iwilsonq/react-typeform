import React from 'react';

const Button = props => {
  return (
    <button
      type="button"
      className="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
