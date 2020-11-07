import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import jokeShape from '../../helpers/props/jokeShape';

class Punchline extends Component {
  // static propTypes = {
  //   joke: PropTypes.string,
  // }

  state = {
    punchline: this.props.punchline,
  }

  render() {
    const { punchline } = this.state.punchline;
    return (
      <>
      {punchline}
      </>
    );
  }
}

export default Punchline;
