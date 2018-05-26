import React, { Component } from 'react';
import Header from './components/Header/Header'
import Board from './components/Board/Board'
import BoardList from './components/BoardList/BoardList'
import Column from './components/Column/Column'
import './App.sass';

class App extends Component {


  render() {
    let columns =
      [{
        name: "Reported",
        cards: [
          { name: "Drag & Drop Issues on Safari" },
          { name: "Video upload error on IE" },
          { name: "Multiple select broken" }
        ]
      },
      {
        name: "Investigation",
        cards: [
          { name: "On hover issue" }
        ]
      },
      {
        name: "QA",
        cards: [
          { name: "Embed All Things" },
          { name: "Animated Gif Support" }
        ]
      }
      ];
    return (
      <div className="App">
        <Header />
        <div className="flex main-container align-stretch">
          <BoardList />
          <Board name="UI Issues" columns={columns} />
        </div>
      </div>
    );
  }
}

export default App;
