import React from 'react';
import { Provider } from 'react-redux';
import TransferList from './options/TransferList.jsx';
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
};

export default App;
