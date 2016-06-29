import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import testReducer from './testReducer';
const rootReducer = combineReducers({
  testReducer,
  //Needed for react-router
  routing
});

export default rootReducer;
