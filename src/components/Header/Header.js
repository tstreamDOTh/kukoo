import React, { Component } from 'react';
import './Header.sass';
import '../../style/layout.sass';

class Header extends Component {


  render() {
    var issueButton = <div className="hamburger"><div className="fabar" /><div className="fabar" /><div className="fabar" /></div>;
    return (
      <div className="Header flex">
        <div className="flex-1 flex justify-start">
          {issueButton}
        </div>
        <div className="flex-1 flex justify-center">
          <p>Logo </p>
        </div>
        <div className="flex-1 flex justify-end">
          <p>Settings </p>
        </div>
      </div>
    );
  }
}

export default Header;
