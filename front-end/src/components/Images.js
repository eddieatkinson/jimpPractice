import React, { Component } from 'react';
import { connect } from 'react-redux';

import GetTestDataAction from '../redux/actions/GetTestDataAction';

class Images extends Component {
  componentDidMount() {
    this.props.GetTestDataAction();
  }
  render() {
    console.log(this.props.data);
    return (
      <div>
        Hey
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, {
  GetTestDataAction,
})(Images);
