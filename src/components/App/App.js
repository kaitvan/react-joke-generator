import React from 'react';
import jokeData from '../../helpers/data/jokeData';

class App extends React.Component {
  state = {
    display: 'get-joke',
  }

  componentDidMount() {
    jokeData.getJoke().then((response) => {
      this.setState({
        joke: response,
      });
    });
  }

  getJoke = () => {
    this.setState({
      display: 'setup',
    });
  }

  getPunchline = () => {
    this.setState({
      display: 'punchline',
    });
  }

  getNewJoke = () => {
    jokeData.getJoke().then((response) => {
      this.setState({
        joke: response,
        display: 'get-joke',
      });
    });
  }

  render() {
    const { joke, display } = this.state;
    let domElements;
    if (display === 'get-joke') {
      domElements = (
        <div>
          <button className='btn' onClick={this.getJoke}>Get a Joke</button>
        </div>
      );
    } else if (display === 'setup') {
      domElements = (
        <div>
          <div className='setup'>{joke.setup}</div>
          <button className='btn' onClick={this.getPunchline}>Get Punchline</button>
        </div>
      );
    } else if (display === 'punchline') {
      domElements = (
        <div>
          <div className='setup'>{joke.setup}</div>
          <div className='punchline'>{joke.punchline}</div>
          <button className='btn' onClick={this.getNewJoke}>Get A New Joke</button>
        </div>
      );
    }

    return (
      <div className="App">
        <h2>React JS Joke Generator</h2>
        <div className='joke-container'>
          {domElements}
        </div>
      </div>
    );
  }
}

export default App;
