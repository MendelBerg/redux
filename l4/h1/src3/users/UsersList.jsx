import React from 'react';
import User from './User.jsx';
import Pagination from '../../src2/Pagination.jsx';
import { connect } from 'react-redux';
import * as usersListActions from './usersList.actions.js';

class UsersList extends React.Component {
  getListForPage() {
    const { currentPage } = this.props;
    const firstOutIndex = this.state.totalItems;
    const indexFrom = (currentPage - 1) * 3;
    const indexTo = firstOutIndex - indexFrom > 3 ? indexFrom + 3 : firstOutIndex;

    return this.props.users.slice(indexFrom, indexTo);
  }

  render() {
    return (
      <div>
        <Pagination goPrev={() => this.goPrev()} goNext={() => this.goNext()} {...this.state} />
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
  increment: usersListActions.goPrev,
  decrement: usersListActions.goNext,
};

const mapState = state => {
  return {
    currentPage: state,
  };
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
