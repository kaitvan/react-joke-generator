import React, { Component } from 'react';

class PunchlineBtn extends Component {
  state = {
    punchline: '',
  }

  showPunchline = () => this.setState({
    punchline: this.props.punchline,
  })

  render() {
    return (
      <div>
        <div className='punchline' id='punchlineDiv'>{this.state.punchline}</div>
        <button onClick={this.showPunchline}>Get the Punchline</button>
      </div>
    );
  }
}

export default PunchlineBtn;
