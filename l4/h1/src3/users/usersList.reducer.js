import { GO_PREV, GO_NEXT } from './usersList.actions.js';

const usersListReducer = (state = 0, action) => {
  switch (action.type) {
    case GO_PREV:
      return state - 1;

    case GO_NEXT:
      return state + 1;

    default:
      return state;
  }
};

export default usersListReducer;
