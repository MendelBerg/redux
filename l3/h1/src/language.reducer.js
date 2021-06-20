import { SET_LANGUAGE } from './language.actions.js';

export const languageReducer = (state='en', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.language;

    default:
      return state;
  }
};
