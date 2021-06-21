import { ADD, DELETE } from './users.actions.js';

const initialState = {
  usersList: [],
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };

    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.userId),
      };

    default:
      return state;
  }
};
