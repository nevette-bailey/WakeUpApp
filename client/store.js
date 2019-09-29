import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger';
import Axios from 'axios';

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ Axios }),
    loggingMiddleware
  )
);
