import React from 'react';
import Header from './Header.jsx';
import { UserDataContext } from './userData-context.js';

class App extends React.Component {
  state = {
    UserData: { name: 'Nikola Tesla', avatar_url: 'https://avatars3.githubusercontent.com/u10001' },
  };
  render() {
    return (
      <div className="page">
        <UserDataContext.Provider value={this.state.UserData}>
          <Header />
        </UserDataContext.Provider>
      </div>
    );
  }
}

export default App;
