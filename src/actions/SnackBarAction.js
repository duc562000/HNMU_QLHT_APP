import {PUSHNOTI, HIDENOTI} from './actionTypes';

export const showNotificaton = (data) => {
  return {
    type: PUSHNOTI,
    data,
  };
};

export const hideNotification = () => {
  return {
    type: HIDENOTI,
  };
};
