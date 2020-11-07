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
        <div className='joke-container'>
          <button className='btn' onClick={this.getJoke}>Get a Joke</button>
        </div>
      );
    } else if (display === 'setup') {
      domElements = (
        <div className='joke-container'>
          <div className='setup'>{joke.setup}</div>
          <button className='btn' onClick={this.getPunchline}>Get Punchline</button>
        </div>
      );
    } else if (display === 'punchline') {
      domElements = (
        <div className='joke-container'>
          <div className='setup'>{joke.setup}</div>
          <div className='punchline'>{joke.punchline}</div>
          <button className='btn' onClick={this.getNewJoke}>Get A New Joke</button>
        </div>
      );
    }

    return (
      <div className="App">
        <img className='logo' src='https://raw.githubusercontent.com/kaitvan/react-joke-generator/master/react-joke-logo.png' alt='logo'></img>
          {domElements}
      </div>
    );
  }
}

export default App;
