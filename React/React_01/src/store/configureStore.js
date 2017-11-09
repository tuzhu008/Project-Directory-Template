import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default configureStore (initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
};