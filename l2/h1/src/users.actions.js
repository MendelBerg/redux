export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

export const addUser = (userData) => {
  return {
    type: ADD,
    userData,
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE,
    userId,
  };
};
