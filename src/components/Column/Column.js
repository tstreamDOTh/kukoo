import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import '../../style/layout.sass';
import './Column.sass';
import { DropTarget } from 'react-dnd';

const ItemTypes = {
    CARD: 'card'
};

const columnTarget = {
  drop(props, monitor) {
    props.cards.push(monitor.getItem())
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
class Column extends Component {

  render() {
    const {connectDropTarget} = this.props;
    let cards = this.props.cards.map((card) =>
    <Card name={card.name} />
  );
    
    return connectDropTarget(
      <div className="Column">
        <p>{this.props.name}</p>
        {cards}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.CARD, columnTarget, collect)(Column);
