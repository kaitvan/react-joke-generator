import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button>{this.props.buttonName}</button>
    );
  }
}

export default Button;
