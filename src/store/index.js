import { createStore, applyMiddleware } from 'redux';
import { appReducer } from '../reducers/reducers';
import { promiseMiddleware } from '../api/middleware';

const store = createStore(appReducer, 
    applyMiddleware(promiseMiddleware));
export default store;
