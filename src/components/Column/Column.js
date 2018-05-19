import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import '../../style/layout.sass';
import './Column.sass';

class Column extends Component {

  render() {
    let cards = this.props.cards.map((card) =>
    <Card name={card.name} />
  );
    
    return (
      <div className="Column">
        <p>{this.props.name}</p>
        {cards}
      </div>
    );
  }
}

export default Column;
