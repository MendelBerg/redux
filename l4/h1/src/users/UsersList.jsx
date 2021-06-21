import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';
import { connect } from 'react-redux';
import * as usersListActions from './usersList.actions.js';

class UsersList extends React.Component {
  getListForPage() {
    const { currentPage } = this.props.users;
    const totalItems = this.props.users.usersList.length;
    const indexFrom = (currentPage) * 3;
    const indexTo = totalItems - indexFrom > 3 ? indexFrom + 3 : totalItems;

    return this.props.users.usersList.slice(indexFrom, indexTo);
  }

  render() {
    const { goPrev, goNext } = this.props;
    const { currentPage, usersList } = this.props.users;

    const newObj = {
      goPrev,
      goNext,
      currentPage,
      totalItems: usersList.length,
    };

    return (
      <div>
        <Pagination {...newObj} />
        <ul className="users">
          {this.getListForPage().map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatch = {
  goPrev: usersListActions.goPrev,
  goNext: usersListActions.goNext,
};

const mapState = state => {
  return {
    users: state,
  };
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
