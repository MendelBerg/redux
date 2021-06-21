export const GO_PREV = 'USERS_LIST/GO_PREV';
export const GO_NEXT = 'USERS_LIST/GO_NEXT';

export const goPrev = () => {
  return {
    type: GO_PREV,
  };
};

export const goNext = () => {
  return {
    type: GO_NEXT,
  };
};
