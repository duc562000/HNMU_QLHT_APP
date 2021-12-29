import {NEW_SCREEN} from './actionTypes';

export const newScreenInit = (body) => {
  return {
    type: NEW_SCREEN,
    body,
  };
};
