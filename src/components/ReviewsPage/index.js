import React, { Component } from 'react';
import './Index.css';
// import { TweenLite, Elastic } from 'gsap';
import data from '../../data';
import Carousel from './Carousel';
import Details from './Details';

class ReviewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      position: 0,
    };
    this.setRef = React.createRef();
  }

  // componentDidMount() {
  //   TweenLite.from(this.setRef, 1, { x: -200, ease: Elastic.easeOut });
  // }

  nextImage = () => {
    const { position, data } = this.state;
    const numItems = data.images.length;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1,
    });
  };

  render() {
    console.log(this.setRef);
    const { data, position } = this.state;
    return (
      <div id="reviews-page">
        <Carousel data={data} position={position} />
        <Details nextImage={this.nextImage} position={position} data={data} setRef={this.setRef} />
      </div>
    );
  }
}

export default ReviewsPage;
