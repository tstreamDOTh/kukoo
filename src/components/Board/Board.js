import React, { Component } from 'react';
import Column from '../../components/Column/Column';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import '../../style/layout.sass';
import './Board.sass';

class Board extends Component {

  render() {
    let columns = this.props.columns.map((column) =>
      <Column name={column.name} cards={column.cards}/>
    );
    return (
      <div className="Board">
        <h3>{this.props.name}</h3>
        <div className="flex align-start">
          {columns}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
