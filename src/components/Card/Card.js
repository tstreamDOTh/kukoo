import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import './Card.sass';
import '../../style/layout.sass';

const ItemTypes = {
    CARD: 'card'
};

const cardSource = {
    beginDrag(props) {
        return {
            name: props.name
        };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Card extends Component {

    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div className="Card" style={{opacity: "isDragging ? 0.5 : 1"}}>
                <div className="name">{this.props.name}</div>
            </div>
        );
    }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
