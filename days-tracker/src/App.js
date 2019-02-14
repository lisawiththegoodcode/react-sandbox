import React, { Component } from 'react';
import {counter} from './helpers';
import './App.css';

class App extends Component {

  handleNameChange = event => {
    const value = event.target.value;
    this.setState({
      name: value,
      count: value
    });
  }

  constructor() {
    super();
    this.state = {
      name: 'lisa',
      count: counter()
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Hello, {this.state.name}!</h1>
        <h2>Today is Day {this.state.count} of your #100daysofcode challenge.</h2>
      </div>
    );
  }
}

export default App;
