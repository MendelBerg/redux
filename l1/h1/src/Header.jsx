import React from 'react';
import UserMenu from './UserMenu.jsx';
import { UserDataContext } from './userData-context.js';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <UserDataContext.Provider value={this.context}>
          <UserMenu />
        </UserDataContext.Provider>
      </header>
    );
  }
}

Header.contextType = UserDataContext;

export default Header;
