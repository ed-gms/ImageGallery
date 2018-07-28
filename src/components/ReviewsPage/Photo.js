import React from 'react';

const Photo = props => (
  <div
    className={`slot position-${props.order}`}
    data-position={props.order}
    style={{ order: props.order }}
  >
    <img src={props.image.src} alt="people" />
  </div>
);

export default Photo;
