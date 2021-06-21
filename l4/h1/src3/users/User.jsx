import React, { Component } from 'react';
import { connect } from 'react-redux';

const User = ({ name, age }) => {
  return (
    <li className="user">
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </li>
  );
};


export default User;

// const mapState = state => {
//   return {
//     users: state,
//   };
// };

// const connector = connect(mapState);
// const ConnectedUser = connector(User);

// export default ConnectedUser;
