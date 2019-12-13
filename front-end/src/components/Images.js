import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, forEach } from 'lodash';

import GetTestDataAction from '../redux/actions/GetTestDataAction';
import GetImagesAction from '../redux/actions/GetImagesAction';

class Images extends Component {
  state = {
    backgroundColor: 'green',
    top: {},
    left: {},
  }
  async componentDidMount() {
    await this.props.GetImagesAction();
    const top = {};
    const left = {};
    forEach(this.props.images, (image, i) => {
      top[i] = 0;
      left[i] = 0;
    });
    this.setState({
      top,
      left,
    });
  }
  getImages() {
    const images = map(this.props.images, (image, i) => {
      return (
        <img key={123456*i} src={image.address} alt={image.alt} style={{zIndex:image.z, top: `${this.state.top[i]}px`, left: `${this.state.left[i]}px`}} id={`image-${i}`} />
      )
    });
    return images
  }
  handleClick() {
    this.setState({
      backgroundColor: this.state.backgroundColor === 'green' ? 'blue' : 'green',
    });
  }
  handleZChange(i) {
    const firstImage = document.getElementById(`image-${i}`);
    firstImage.style.zIndex = 900;
  }
  handlePositionChange(index, position, multiplier) {
    const coordinate = {...this.state[position]};
    coordinate[index] += multiplier * 10;
    this.setState({
      [`${position}`]: coordinate,
    });
  }
  getButtons() {
    const buttons = map(this.props.images, (image, i) => {
      return (
        <div key={1000000000*i}>
          <button key={i} onClick={() => this.handlePositionChange(i, 'top', 1)}>
            Increase top position of image {i}
          </button>
          <button key={i+10} onClick={() => this.handlePositionChange(i, 'top', -1)}>
            Decrease top position of image {i}
          </button>
          <button key={i+100} onClick={() => this.handlePositionChange(i, 'left', 1)}>
            Increase left position of image {i}
          </button>
          <button key={i+1000} onClick={() => this.handlePositionChange(i, 'left', -1)}>
            Decrease left position of image {i}
          </button>
        </div>
      )
    });
    return buttons;
  }
  render() {
    return (
      <div id='images-container' style={{backgroundColor: this.state.backgroundColor}}>
        <div className='images-wrapper'>
          {this.getImages()}
        </div>
        <div className='button-wrapper'>
          <button onClick={this.handleClick.bind(this)}>
            Click me
          </button>
        </div>
        <div className='button-wrapper'>
          {this.getButtons()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.data.images,
  }
}

export default connect(mapStateToProps, {
  GetTestDataAction,
  GetImagesAction,
})(Images)
