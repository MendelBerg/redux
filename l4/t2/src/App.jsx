import React from 'react';
import { Provider } from 'react-redux';
import Users from './users/Users.jsx';
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};

export default App;
