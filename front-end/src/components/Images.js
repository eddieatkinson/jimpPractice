import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import GetTestDataAction from '../redux/actions/GetTestDataAction';
import GetImagesAction from '../redux/actions/GetImagesAction';

class Images extends Component {
  state = {
    backgroundColor: 'green',
  }
  componentDidMount() {
    this.props.GetImagesAction();
  }
  getImages() {
    const images = map(this.props.images, (image, i) => {
      return (
        <img key={i} src={image.address} alt={image.alt} />
      )
    });
    return images
  }
  handleClick() {
    this.setState({
      backgroundColor: this.state.backgroundColor === 'green' ? 'blue' : 'green',
    })
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
})(Images);
