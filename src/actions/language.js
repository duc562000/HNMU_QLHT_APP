import {CHANGE_LANGUAGE} from './actionTypes';

export const changeLanguage = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
};
