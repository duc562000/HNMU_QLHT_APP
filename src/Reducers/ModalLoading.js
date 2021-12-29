import {SHOWLOADING, HIDELOADING} from '../actions/actionTypes';

const initialState = {
  isVisible: false,
};
// @ts-ignore

export default function ModalLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case SHOWLOADING: {
      return {isVisible: true};
    }
    case HIDELOADING: {
      return {isVisible: false};
    }
    default:
      return state;
  }
}
