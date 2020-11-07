import React from 'react';
// import Punchline from '../punchline';
import Setup from '../setup';
// import Button from '../button';
import jokeData from '../../helpers/data/jokeData';
import PunchlineBtn from '../getPunchline';

class App extends React.Component {
  state = {
    joke: {},
  }

  componentDidMount() {
    jokeData.getJoke().then((response) => {
      this.setState({
        joke: response,
      });
    });
  }

  getNewJoke = () => {
    jokeData.getJoke().then((response) => {
      this.setState({
        joke: response,
      });
    });
    const string = document.getElementById('punchlineDiv');
    string.innerHTML = '';
  }

  render() {
    return (
      <div className="App">
        <h2>React JS Joke Generator</h2>
        <div className='joke-container'>
          <div className='div-setup'><Setup setup={this.state.joke.setup}/></div>
          <PunchlineBtn punchline={this.state.joke.punchline}/>
          <button onClick={this.getNewJoke}>Get a New Joke</button>
        </div>
      </div>
    );
  }
}

export default App;
