import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composedReduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    serialize: true,
  }) : null;
/* eslint-enable no-underscore-dangle */
const composeEnhancers = composedReduxDevTool || compose;

const middlewares = [
  sagaMiddleware,
];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducers,
    preloadedState,
    enhancer,
  );

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept(() => {
      // eslint-disable-next-line global-require
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(rootSaga);
  return store;
}
