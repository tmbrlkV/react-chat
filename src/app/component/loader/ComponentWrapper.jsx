'use strict';
/* global require */
import React from 'react';
const defaultImg = require('../../../assets/icons/default-user-image.png');

const Loader = () => {
  return class extends React.PureComponent {
    render() {
      return <img {...this.props} onError={(e) => e.target.src = defaultImg}/>;
    }
  };
};

export default Loader;