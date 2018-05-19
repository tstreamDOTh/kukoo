import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import '../../style/layout.sass';
import './Column.sass';

class Column extends Component {

  render() {
    
    return (
      <div className="Column">
        <p>{this.props.name}</p>
        <Card name="Drag & Drop Issues On Safari"/>
        <Card name="Video issues in IE"/>
      </div>
    );
  }
}

export default Column;
