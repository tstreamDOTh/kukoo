import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import Column from './components/Column/Column'
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Column name="Incoming Bugs"/>
      </div>
    );
  }
}

export default App;
