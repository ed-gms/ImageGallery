import React from 'react';
import './Details.css';
import Content from './Content';
import Button from './Button';

const Details = props => {
  const { data, position } = props;
  return (
    <div className="details-wrapper">
      <Content data={data} position={position} setRef={props.setRef} />
      <Button
        nextImage={() => {
          props.nextImage();
        }}
      />
    </div>
  );
};

export default Details;
