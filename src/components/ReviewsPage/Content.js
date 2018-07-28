import React from 'react';
import './Content.css';

const Content = props => {
  const { data, position } = props;
  return (
    <div className="content">
      <div className="text-box">
        <h4>{data.images[position].caption}</h4>
        <p>{data.images[position].details}</p>
      </div>
    </div>
  );
};

export default Content;
