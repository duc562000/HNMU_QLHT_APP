import {CHANGE_LANGUAGE} from './../actions/actionTypes';

var initialState = {
  language: 'vi',
};

var languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {language: action.language};
    }
    default:
      return state;
  }
};

export default languageReducer;
