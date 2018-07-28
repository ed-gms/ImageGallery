import React from 'react';
import './Button.css';

const Button = props => (
  <div className="button" onClick={props.nextImage}>
    &gt;
  </div>
);

export default Button;
