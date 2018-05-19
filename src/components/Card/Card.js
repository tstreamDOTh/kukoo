import React, { Component } from 'react';
import './Card.sass';
import '../../style/layout.sass';

class Card extends Component {

  render() {
    
    return (
      <div className="Card">
        <div className="name">{this.props.name}</div>
      </div>
    );
  }
}

export default Card;
