import React, { Component } from 'react';
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';
import UserAvatar from 'react-user-avatar';
import './Header.sass';
import '../../style/layout.sass';

class Header extends Component {


  render() {
    var issueButton = <div className="flex align-center boards-bttn"><div className="hamburger ">
      <div className="fabar" />
      <div className="fabar" />
      <div className="fabar" />
    </div>
      <div>
        Boards
    </div>
    </div>
      ;


    return (
      <div className="Header flex">
        <div className="flex-1 flex justify-start">
          {issueButton}
        </div>
        <div className="flex-1 flex justify-center">
          <p>Logo </p>
        </div>
        <div className="flex-1 flex justify-end">
        <div className="settings-panel" >
            <img className="gear" src="settings.svg" />
          </div>
          <div className="settings-panel" >
            <UserAvatar size="35" name="Madonna" />
          </div>
          <div className="settings-panel" >
            <NotificationBadge count={4} effect={Effect.SCALE} />
            <img className="bell" src="bell.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
