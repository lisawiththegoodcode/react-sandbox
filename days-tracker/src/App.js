import React, { Component } from 'react';
import {counter} from './helpers';
import Card from "./components/Card";
import Counter from "./components/Counter"

import './App.css';

class App extends Component {

  // handleNameChange = event => {
  //   const value = event.target.value;
  //   this.setState({
  //     name: value,
  //     count: value,
  //     imageCounter: value,
  //     im
  //   });
  // }

  constructor() {
    super();
    this.state = {
      name: 'lisa',
      count: counter(),
      imageCounter: 0,
      pic: "https://source.unsplash.com/random" 
    }
  }

  handleClick = () => {
    this.setState(({imageCounter}) => ({
      imageCounter: imageCounter + 1,
    }));
  }

  render() {
    return (
      <div className="Container">
        <header>
          <h1 className="App-header">Hello, {this.state.name}!</h1>
          <h2>Today is Day {this.state.count} of your #100daysofcode challenge.</h2>
          <h3>Would you like to click the button?</h3>
          <button onClick={this.handleClick}>Yes, that sounds like fun!</button>          
        </header>
        <main>
          <Card pic={this.state.pic}/>
          <Counter counter={this.state.imageCounter}/>
        </main>
      </div>
      
      
      // <div className="App">
      //   <h1 className="App-header">Hello, {this.state.name}!</h1>
      //   <h2>Today is Day {this.state.count} of your #100daysofcode challenge.</h2>
      // </div>
    );
  }
}

export default App;
