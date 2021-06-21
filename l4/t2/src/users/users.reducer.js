import { ADD_USER, DELETE_USER } from './users.actions.js';

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };

    case DELETE_USER:
      const newList = state.usersList.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        usersList: newList,
      };

      return {
        ...state,
        usersList: updatedList,
      };

    default:
      return state;
  }
};

export default usersReducer;
