import React, { Component } from 'react';
import Column from '../../components/Column/Column';
import '../../style/layout.sass';
import './BoardList.sass';

class BoardList extends Component {

  render() {
    return (
      <div className="BoardList ">
      <h3>Issue Boards</h3>

        <ul>
          <li>UI Issues</li>
          <li>Norads</li>
          <li>Incident Reported</li>
        </ul>
      </div>
    );
  }
}

export default BoardList;
