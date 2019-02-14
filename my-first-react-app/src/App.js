import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      //object
      input: '',
      items: []
    };
  }
  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn});
  // }
  onChange = event => {
    this.setState({input: event.target.value})
  }
  formSubmit = event => {
    event.preventDefault()
    console.log("this is state:", this.state.items);
    this.setState({
      items : [...this.state.items, this.state.input],
      input : ''
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>todo list</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div id="toDo">
            <form onSubmit={this.formSubmit}>
              <input type="text" value={this.state.input} onChange={this.onChange} />
              <button>Submit</button>
            </form>
            <FirstComponent items={this.state.items}/>   
          </div>
        </header>
      </div>
    );
  }
}

export default App;
