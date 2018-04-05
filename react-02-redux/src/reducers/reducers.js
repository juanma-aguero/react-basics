import {combineReducers} from 'redux'

import simple from './simpleReducer';


const allReducers = combineReducers({
  simple
});

export default allReducers