import {LOGIN} from './actionTypes';

export function saveUserToRedux(data) {
  return {
    type: LOGIN,
    data,
  };
}
