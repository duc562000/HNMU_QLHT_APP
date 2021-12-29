import {PUSHNOTI, HIDENOTI} from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  screen: '',
  title: '',
  content: '',
  id_record: '',
};
// @ts-ignore

export default function SnackReducer(state = initialState, action) {
  switch (action.type) {
    case PUSHNOTI: {
      return {...action.data, isOpen: true};
    }
    case HIDENOTI: {
      return {...state, isOpen: false};
    }
    default:
      return state;
  }
}
