import { createStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }
const createStoreWithMiddleWare = applyMiddleWare(...middleware)(createStore);

export default function configureStore (initialState) {
    return createStoreWithMiddleWare(rootReducer, initialState);
};
