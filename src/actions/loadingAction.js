import {
  SHOWLOADING,
  HIDELOADING
} from './actionTypes';

export const showLoading = () => {
  return {
    type: SHOWLOADING,
  };
};

export const hideLoading = () => {
  return {
    type: HIDELOADING
  };
};
