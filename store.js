import logger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './src/client/redux/reducers';

const middlewares = [thunk];

if(process.env !== 'production') {
  middlewares.push(logger());
}

if(module.hot) {
  module.hot.accept('./src/client/redux/reducers',() => {
    const nextRootReducer = require('./src/client/redux/reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}
const enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, {}, enhancer);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
