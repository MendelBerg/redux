import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User.jsx';
import Pagination from './Pagination.jsx';
import { goPrevPage, goNextPage } from './usersList.actions.js';
import { usersListSelector, currentPageSelector } from './users.selectors.js';

const itemsPerPage = 3;

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const start = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
      />
      <ul className="users">
        {usersToDisplay.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.number.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
};

const mapDispatch = {
  goPrev: goPrevPage,
  goNext: goNextPage,
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

export default connect(mapState, mapDispatch)(UsersList);
