import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { appReducer } from '../reducers/reducers';
import { promiseMiddleware } from '../api/middleware';
import articleSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, 
    applyMiddleware(promiseMiddleware, sagaMiddleware));

// run the saga
sagaMiddleware.run(articleSaga);

export default store;
