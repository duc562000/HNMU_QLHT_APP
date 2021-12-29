import userReducer from './userReducer';
import {combineReducers} from 'redux';
import ModalLoadingReducer from './ModalLoading';
import SnackReducer from './SnackReducer';
import ScreenInitReducer from './ScreenInit';
import languageReducer from './languageReducer';
// @ts-ignore
const rootReducer = combineReducers({
  userReducer,
  ModalLoadingReducer,
  SnackReducer,
  ScreenInitReducer,
  languageReducer,
  
});

export default rootReducer;
