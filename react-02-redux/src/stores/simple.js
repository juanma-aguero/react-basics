import {createStore, applyMiddleware} from 'redux'
import allReducers from '../reducers/reducers'
import logger from 'redux-logger';

let middlewares = [];
middlewares.push(logger);


let simpleStore = createStore(
  allReducers,
  applyMiddleware(...middlewares)
);

export default simpleStore
