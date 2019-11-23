import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import GetTestDataAction from '../redux/actions/GetTestDataAction';
import GetImagesAction from '../redux/actions/GetImagesAction';

class Images extends Component {
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
  render() {
    console.log(this.props.data);
    return (
      <div className='images-wrapper'>
        {this.getImages()}
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
