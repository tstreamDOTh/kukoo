import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
