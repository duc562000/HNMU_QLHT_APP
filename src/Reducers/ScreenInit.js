import {NEW_SCREEN, CLEAR_SCREEN} from '../actions/actionTypes';

const initialState = {
  screen: null,
  id: null,
};
// @ts-ignore

export default function ScreenInitReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_SCREEN: {
      console.log('action', action);
      return {screen: action.body.screen, id: action.body.id_record};
    }

    default:
      return state;
  }
}
