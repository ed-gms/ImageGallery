import React, { Component } from 'react';
import './Carousel.css';
import Photo from './Photo';

class Carousel extends Component {
  getOrder = itemIndex => {
    const { position, data } = this.props;
    const numItems = data.images.length || 1;
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  };

  render() {
    const { data, position } = this.props;
    return (
      <div id="carousel-wrapper">
        <div className="carousel-container">
          <h2>Reviews</h2>
          <div className="counter">
            <span>
              {position + 1} / {data.images.length}
            </span>
          </div>
          <div className="carousel">
            {data.images.map((image, i) => (
              <Photo image={image} key={i} index={i} order={this.getOrder(i)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
