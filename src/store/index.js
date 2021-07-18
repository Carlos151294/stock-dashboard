import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagasMiddleware = createSagaMiddleware();
const middlewares = [sagasMiddleware];

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagasMiddleware.run(rootSaga);

export { store };
