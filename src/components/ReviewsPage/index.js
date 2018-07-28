import React, { Component } from 'react';
import './Index.css';
import data from '../../data';
import Carousel from './Carousel';
import Details from './Details';

class ReviewsPage extends Component {
  constructor() {
    super();
    this.state = {
      data,
      position: 0,
    };
  }

  nextImage = () => {
    const { position, data } = this.state;
    const numItems = data.images.length;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1,
    });
  };

  render() {
    const { data, position } = this.state;
    return (
      <div id="reviews-page">
        <Carousel data={data} position={position} />
        <Details nextImage={this.nextImage} position={position} data={data} />
      </div>
    );
  }
}

export default ReviewsPage;
