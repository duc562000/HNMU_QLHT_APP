/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./src/Reducers/index";
import RootView from "./src/RootView";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/Saga/rootSaga";
import FirebaseNotification from "./src/helper/FirebaseNotification";
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <FirebaseNotification />
      <RootView />
    </Provider>
  );
};

export default App;
