import React, { Component } from 'react';
import './Header.sass';
import '../../style/layout.sass';

class Header extends Component {
  render() {
    return (
      <div className="Header flex">
        <div className="flex-1 justify-start">
          <p>Issue Boards </p>
        </div>
        <div className="flex-1 justify-center">
          <p>Issue Boards </p>
        </div>
        <div className="flex-1 justify-end">
          <p>Issue Boards </p>
        </div>
      </div>
    );
  }
}

export default Header;
