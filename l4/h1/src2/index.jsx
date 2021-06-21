import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList.jsx';
import './index.scss';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 5,
    name: 'Dad',
  },
];


const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users}/>, rootElement);
