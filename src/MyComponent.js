import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: 'default name',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        MyComponent.js - {name}
        <br />
        children {children}
        <p> favoriteNumber = {favoriteNumber} </p>
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: 'default name',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
