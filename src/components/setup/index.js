import React, { Component } from 'react';

class Setup extends Component {
  state = {
    joke: {},
  }

  render() {
    return (
      <>
      <div>{this.props.setup}</div>
      </>
    );
  }
}

export default Setup;
