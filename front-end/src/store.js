import {applyMiddleware, createStore, compose} from "redux";
import {createEpicMiddleware} from 'redux-observable'

import thunk from 'redux-thunk'

import logger from 'redux-logger'
import rootReducer from './reducers'
import rootEpic from './epics'


const initialState = {};
const epicMiddleware = createEpicMiddleware();
const middleware = [thunk, logger, epicMiddleware];


const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

epicMiddleware.run(rootEpic);

export default store;
